var path = require('path');

module.exports = function(grunt) {
  // Sample config.
  grunt.initConfig({
    clean: {
      output: '**/output.txt',
    },
    subgrunt: {
      all: {
        options: {
          gruntfile: 'Gruntfile-sub.js',
        },
        src: 'fixtures/*',
      },
    },
  });

  // Sample tasks.
  grunt.registerMultiTask('subgrunt', 'Run Gruntfiles in directories.', function() {
    var options = this.options();
    grunt.util.async.forEachSeries(this.filesSrc, function(subdir, next) {
      grunt.log.write('Running ' + options.gruntfile + ' in ' + subdir + '...');
      grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.relative(subdir, options.gruntfile), '--base', '.'],
        opts: {cwd: subdir},
      }, function(error, result) {
        if (error) {
          grunt.log.error().error(result.stdout).writeln();
          next(new Error('Error running sub-gruntfile "' + gruntfile + '".'));
        } else {
          grunt.log.ok().verbose.ok(result.stdout);
          next();
        }
      });
    }, this.async());
  });

  grunt.registerTask('verify', 'List output files and their contents.', function() {
    grunt.file.expand('**/output.txt').forEach(function(filepath) {
      grunt.log.ok('Contents of ' + filepath + ': ' + grunt.file.read(filepath));
    });
  });

  // Remove output files, generate output files, verify output files.
  grunt.registerTask('default', ['clean', 'subgrunt', 'verify']);

  // Load Grunt plugin(s).
  grunt.loadNpmTasks('grunt-contrib-clean');
};