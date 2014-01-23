module.exports = function(grunt) {
  // Sample config.
  grunt.initConfig({
    copy: {
      sample: {
        src: 'sample.txt',
        dest: 'output.txt',
      },
    },
  });

  // Copy sample file to output location.
  grunt.registerTask('default', ['copy:sample']);

  // Load Grunt plugin(s).
  // (note that grunt.loadNpmTasks won't work in this scenario)
  grunt.loadTasks('../node_modules/grunt-contrib-copy/tasks');
};