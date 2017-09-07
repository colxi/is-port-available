/*
* @Author: colxi.kl
* @Date:   2017-09-05 22:17:51
* @Last Modified by:   colxi.kl
* @Last Modified time: 2017-09-07 04:23:28
*/

/**
 * (async) isPortAvailable() : Will test the requested port, resolving the
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
const http = require("http");

const isPortAvailable = function(port){
	return new Promise((resolve, reject) => {
		port = parseInt(port);
		const tester = http.createServer()
			.once('error', err => (err.code == 'EADDRINUSE' ? resolve(false) : reject(err)))
			.once('listening', () => tester.once('close', () => resolve(true)).close())
			.listen(port);
	});
}

module.exports = isPortAvailable;
