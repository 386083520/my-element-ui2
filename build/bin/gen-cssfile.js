var fs = require('fs')
var path = require('path')
var basepath = path.resolve(__dirname, '../../packages/')
var Components = require('../../components.json')
Components = Object.keys(Components)
var indexContent = ''
Components.forEach(function(key) {
    indexContent += '@import "./' + key + '.scss";\n'
})
fs.writeFileSync(path.resolve(basepath, 'theme-chalk', 'src', 'index.scss'), indexContent)
