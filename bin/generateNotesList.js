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

const data = readFilesSync('./src/pages/articles/')

const metadata = []
data.forEach(file => {
  const begin = file.indexOf('export const metadata')
  const start = file.indexOf('{')
  const end = file.indexOf('\n}\n', start)
  metadata.push(file.substring(start,end+2)+',\n')
})

const contents = 'export const metadata = [\n' + metadata.join() + ']'
fs.writeFileSync('test.js', contents)
