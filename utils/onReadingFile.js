function onReadingFile(err, data, req, res){
    const HeaderConfig = {'Content-type':'text/html'}
    const statusCode = 200

    if(err) throw err

    res.writeHead(statusCode, HeaderConfig)
    res.write(data)

    return res.end()
}

module.exports = onReadingFile