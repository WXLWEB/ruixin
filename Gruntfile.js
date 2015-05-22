module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
        "my_target":{
            "files":{
                'js/plug.min.js':['js/jquery.min.js','js/bootstrap.min.js','js/jquery.leanModal.min.js','js/jquery.hideBox.js','js/jquery.fitvids.js','js/jquery.rowsControl.js','js/popover.js','js/owl.carousel.js','js/jquery.popmenu.js']
            }
        }

    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};
