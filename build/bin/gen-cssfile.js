var fs = require('fs')
var path = require('path')
var basepath = path.resolve(__dirname, '../../packages/')
const Components = ['aaa-bbb', 'badge', 'card']
var indexContent = ''
Components.forEach(function(key) {
    indexContent += '@import "./' + key + '.scss";\n'
})
fs.writeFileSync(path.resolve(basepath, 'theme-chalk', 'src', 'index.scss'), indexContent)
