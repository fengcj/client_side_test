var http = require("http");


var server = http.createServer(function(request,response){
	console.log(request.url);
	if(request.url.indexOf("callBack1") > -1){
		console.log("server return callBack1");
		response.end("callBack1({'a' : 1})");
	}else if(request.url.indexOf("callBack2") > -1){
		console.log("server return callBack1");
		response.end("callBack2({'b' : 2})");
	}else{
		response.end("Hello");
	}


});

server.listen(3000);