const fs = require('fs')
function getPages(pageName){
    return fs.readFileSync(pageName,'utf-8');
}

module.exports = {getPages};