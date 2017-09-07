/*
* @Author: colxi.kl
* @Date:   2017-09-05 22:17:51
* @Last Modified by:   colxi.kl
* @Last Modified time: 2017-09-07 06:24:37
*/

/**
 * (async) isPortAvailable() : Will test the requested local port, resolving the
 * returned Promise with true, when port is AVAILABLE, false when PORT IS IN USE
 * (EADDRINUSE), or rejecting the Promise with an error when port is not usable
 * by any other reason (need root permision , error in the network interface...)
 *
 * @param  {integer}  port 	Number of the port to check
 *
 * @return {Boolean}      	Returns a Promise that can resolve in TRUE|FALSE
 *                          or be rejected with an Error
 *
 */
const net = require("net");

// main function
var isPortAvailable = function(port){
	isPortAvailable.lastError = "";
	return new Promise((resolve, reject) => {
		port = parseInt(port);
		const tester = net.createServer()
			.once('error', err =>{
				isPortAvailable.lastError = err.code || err; // EADDRINUSE , EACCES ...
				resolve(false);
			})
			.once('listening', () => tester.once('close', () => resolve(true)).close())
			.listen(port);
	});
};
// Last Error track
isPortAvailable.lastError = "";

module.exports = isPortAvailable;
