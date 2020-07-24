const http = require('http')

const parseBody = (request, callback) => {
    let body = ''
    request.on('data', chunk => {
        body += chunk.toString()
    })
    request.on('end', () => {
        callback(JSON.parse(body))
    })
}

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        if(request.method === "POST"){
            return parseBody(request, result => {
                response.end(`Hello ${result.name}, Welcome to WeJapa Internships`)
            })
        }

        return response.end('Hello World, Welcome to WeJapa Internships')

    } else {
        return response.end('Not found')
    }
     
})

server.listen(4000, ()=>{
    console.log('server started')
})