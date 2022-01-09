const onReadingFile = require('./onReadingFile')

const onServerRunning = (req, res) =>{
    const fs = require('fs')
    const HTMLFilePath = './public/index.html' //Remember we're calling it on 'http-writefile' 
    
    fs.readFile(HTMLFilePath, (err,data) => onReadingFile(err, data, req, res))
}

module.exports = onServerRunning