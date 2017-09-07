# is-port-available (nodejs)

```(async) isPortAvailable()``` : Will test the requested port, resolving the returned Promise with ```true```, when port **IS AVAILABLE**, and ```false``` when not AVAILABLE. When port is **NOT AVAILABLE**, the reason (err.code | err) can be checked reading ```isPortAvailable.lastError``` property.
> Note : ```isPortAvailable.lastError``` is reset automatically before each call to isPortAvailable

**@param  {integer}  port** 	Number of the port to check

**@return {Boolean}**     	  Returns a Promise that can resolve in TRUE|FALSE or be rejected with an Error

### Installation

Use npm to install the module :
```$ npm install --save is-port-available```

### Usage
Example of a simple port avaiability test via ```Promise.then()```:
```javascript
	const isPortAvailable = require('is-port-available');

	var port = 80;
	isPortAvailable(port).then( status =>{
		if(status) console.log('Port ' + port + ' IS available!');
		else{
			console.log('Port ' + port + ' IS NOT available!');
			console.log('Reason : ' + isPortAvailable.lastError);
		}
	});
```
Example Using ```await``` inside an ```async``` self invoking function :
```javascript
	const isPortAvailable = require('is-port-available');

	(async function(){
		var port = 80;
		var status = await isPortAvailable(port);

		if(status) console.log('Port ' + port + ' IS available!');
		else{
			console.log('Port ' + port + ' IS NOT available!');
			console.log('Reason : ' + isPortAvailable.lastError);
		}

	})()
```

## Licence

GPL
