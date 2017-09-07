# is-port-available (nodejs)

```(async) isPortAvailable()``` : Will test the requested port, resolving the returned Promise with true, when port is AVAILABLE, false when PORT IS IN USE (EADDRINUSE), or rejecting the Promise with an error when port is not usable by any other reason (need root permision , error in the network interface...)

**@param  {integer}  port** 	Number of the port to check

**@return {Boolean}**     	  Returns a Promise that can resolve in TRUE|FALSE or be rejected with an Error
