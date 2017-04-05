#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var spawnSync = require("child_process").spawnSync;

var dir = path.resolve('.');
while (dir != '/') {
	if (fs.existsSync(dir+'/gradlew')) {
	    console.log('Found gradlew at',dir);

			var proc = spawnSync(
				dir+'/gradlew', 
				process.argv.slice(2), 
				{
					stdio: 'inherit'
				}
			);
				
			process.exit(proc.status);
	}
	
	dir = path.dirname(dir);
}

console.log('No gradlew found up in the FS hierarchy. Sorry.')