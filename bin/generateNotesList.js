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

const metadata = []
data.forEach(file => {
  const begin = file.indexOf('export const metadata')
  const start = file.indexOf('{')
  const end = file.indexOf('\n}\n', start)
  metadata.push(file.substring(start,end+2)+',\n')
})

const contents = 'module.exports = [\n' + metadata.join() + ']'
fs.writeFileSync('./src/utils/notesList.js', contents)
