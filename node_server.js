const http = require('http');

const server = http.createServer(function(request, response){
if(request.method === 'GET'){
    response.end(`we got your ${request.method} message. We will get back to you`);
}else if(request.method === 'POST'){
    response.end(`we got your ${request.method} message. We will get back to you`);
}else if(request.method === 'PATCH'){
    response.end(`we got your ${request.method} message. We will get back to you`);
console.log("we got the request")
response.end(`We got your ${request.method} message. We will get back to you`);
}else if(request.method === 'DELETE'){
    response.end(`we got your ${request.method} message. We will get back to you`);
}else if(request.method === 'PUT'){
    response.end(`we got your ${request.method} message. We will get back to you`);
}else {
    response.end(`we cannot handle this unknow request`);
}
});


server.listen(3001);

//http verbs or http methods
//POST - Sending/create resource
//GET - Get resource
//PATCH/PUT - update a resource
//DELETE - delete a resource

//CRUD OPERATIONS

