# A sub-Gruntfile example

Run a Gruntfile in multiple subdirectories.

_A solution to the scenario posed in [Grunt issue 954](https://github.com/gruntjs/grunt/pull/954#issuecomment-33062018)._

## The "main" Gruntfile.

This [Gruntfile][] has a task that runs the specified [sub-Gruntfile][] once in each specified subdirectory (via [grunt.util.spawn](http://gruntjs.com/api/grunt.util#grunt.util.spawn) and the `--gruntfile` option), with the cwd set to that directory (via the `--base` option).

## The "sub" Gruntfile.

This [sub-Gruntfile][] is configured as if it existed in one of the subdirectories. Note that inside this Gruntfile, Grunt plugins must be loaded via [grunt.loadTasks](http://gruntjs.com/api/grunt#grunt.loadtasks) and not [grunt.loadNpmTasks](http://gruntjs.com/api/grunt#grunt.loadnpmtasks).

[Gruntfile]: Gruntfile.js
[sub-Gruntfile]: Gruntfile-sub.js

## Try it out.

1. `npm install`
1. `grunt` or `grunt --verbose`
