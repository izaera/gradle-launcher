#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var os = require('os');
var spawnSync = require("child_process").spawnSync;

var GRADLEW = os.platform() === 'win32' ? 'gradlew.bat' : 'gradlew';

var dir = path.resolve('.');

while (true) {
	var gradlewPath = path.join(dir, GRADLEW);

	if (fs.existsSync(gradlewPath)) {
		console.log('Found', GRADLEW, 'at', dir);

		var proc = spawnSync(
			gradlewPath,
			process.argv.slice(2),
			{
				stdio: 'inherit'
			}
		);

		process.exit(proc.status);
	}

	var parentDir = path.dirname(dir);

	if (parentDir === dir) {
		break;
	}

	dir = parentDir;
}

console.log('No', GRADLEW, 'found up in the FS hierarchy. Sorry.')