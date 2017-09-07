# is-port-available (nodejs)

```(async) isPortAvailable()``` : Will test the requested port, resolving the returned Promise with true, when port is AVAILABLE, false when PORT IS IN USE (EADDRINUSE), or rejecting the Promise with an error when port is not usable by any other reason (need root permision , error in the network interface...)

**@param  {integer}  port** 	Number of the port to check

**@return {Boolean}**     	  Returns a Promise that can resolve in TRUE|FALSE or be rejected with an Error

### Installation

Use npm to install the module :
```$ npm install --save is-port-available```

### Usage
Simple port avaiability test:
```javascript
	const isPortAvailable = require('is-port-available');

	var available = false;
	var port = 80;
	try( available = isPortAvailable(port) }
	catch(err){ console.log('Error happened :' , err) }

	console.log('Port '+ port + (available ? ' IS ' : ' IS NOT ') + 'available!');
```

## Licence

GPL
