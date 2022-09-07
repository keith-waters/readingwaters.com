const fs = require('fs');
const path = require('path');

function readFilesSync(dir) {
  var data = []
  filenames = fs.readdirSync(dir)
  filenames.forEach((filename) => {
    data.push(fs.readFileSync(dir + filename, {encoding: 'utf8'}))
  })
  return data
}

const data = readFilesSync('./src/pages/notes/')

let metadta = []
data.forEach(file => {
	const metadata = require(file);
	console.log(file, metadata)
  const begin = file.indexOf('export const metadata')
  const start = file.indexOf('{')
  const end = file.indexOf('\n}\n', start)
  metadta.push(file.substring(start,end+2)+',\n')
})

metadta.sort((a,b) => a.publishDate > b.publishDate)

const contents = 'module.exports = [\n' + metadta.join() + ']'
fs.writeFileSync('./src/utils/notesList.js', contents)
