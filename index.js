/*
* @Author: colxi.kl
* @Date:   2017-09-05 22:17:51
* @Last Modified by:   colxi.kl
* @Last Modified time: 2017-11-15 08:14:55
*
* (async) isPortAvailable() : Will test the requested local port, resolving the
* returned Promise with true, when port is AVAILABLE, false when PORT IS IN NOT
* AVAILABLE. When not available , the error code or the reason of denial can
* be checked in isPortAvailable.lastError property.
*
* @param  {integer}  port 	Number of the port to check
*
* @return {Boolean}      	Returns a Promise that can resolve in TRUE|FALSE
*
*/
const net = require('net');

// main function
var isPortAvailable = function(port){
	isPortAvailable.lastError = '';
	return new Promise( resolve => {
		// if port is not a number or is not an integet or is out of range block
		if( isNaN(port) || port != parseInt(port) ||port < 0 || port > 65536){
			isPortAvailable.lastError = 'Ivalid input. Port must be an Integer number betwen 0 and 65536';
			resolve(false);
		}
		// do the test
		port = parseInt(port);
		const tester = net.createServer()
			// catch errors, and resolve false
			.once('error', err =>{
				isPortAvailable.lastError = err.code || err; // EADDRINUSE , EACCES ...
				resolve(false);
			})
			// return true if succed
			.once('listening', () => tester.once('close', () => resolve(true)).close())
			.listen(port);
	});
};
// Last Error track
isPortAvailable.lastError = '';

  
// Allow argument from command line, for testing purposes, 
// ( only when module is executed directly )
if (!module.parent) {
	if(typeof process.argv[2] !== 'undefined'){
		var port = process.argv[2];
		console.log('Checking port ' + port + ' ...');
		isPortAvailable( port ).then(function(status){
			if(status) console.log('Port ' + port + ' is available!');
			else  console.log('Port ' + port + ' is  NOT available! ('+ isPortAvailable.lastError +')');
		});
	}else console.log('Err: Port to check not provided. Example: nodejs index.js 8080')
} 

module.exports = isPortAvailable;
