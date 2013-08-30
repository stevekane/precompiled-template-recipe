'use strict'

module.exports = function (grunt) {
  
  grunt.initConfig({
    templateDir: "path/to/directory",
    outputDir: "path/to/output",
    compiled: "nameOfCompiledFile.js",

    emberTemplates: {
      precompile: {
        options: {
          templateBasePath: "path/to/directory/" ,
          templateFileExtensions: /\.(hbs|hjs|handlebars)/
        },
        src: "<%= templateDir %>/**/*.{hbs,hjs,handlebars}",
        dest: "<%= outputDir %>/<%= compiled %>"
      }    
    },

    watch: {
      handlebars: {
        files: ["<%= templateDir %>/**/*.{hbs,hjs,handlebars}"],
        tasks: ["emberTemplates"],
        options: {
          livereload: true 
        }
      } 
    }
  });

  //load our tasks from NPM
  grunt.loadNpmTasks("grunt-ember-templates");
  grunt.loadNpmTasks("grunt-contrib-watch");

  //register CLI task that will precompile our templates
  grunt.registerTask("default", ["emberTemplates"]);

  //register CLI task that will watch our handlebars files and 
  //recompile them whenever they change (watch task blocks the process)
  grunt.registerTask("precompile-watch", ["emberTemplates", "watch"]);

};
