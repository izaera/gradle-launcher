# gradle-launcher

A nodejs global script that searches for `gradlew `up in the FS hierarchy and launches it.

This node package installs a global CLI named `gradlew` which, when run in a directory, 
tries to locate a valid `gradlew` script by looking up in the filesystem hierarchy. If 
any is found it is then launched.

This is good for avoiding the need to create aliases or symlinks to project specific 
`gradlew` scripts.
