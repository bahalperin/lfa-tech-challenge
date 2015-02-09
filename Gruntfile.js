'use strict'

module.exports = function (grunt) {

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: ['src/js/data.js', 'src/js/app.js'],
                dest: 'temp/combined.js'
            }
        },
        cssmin: {
            css: {
                files: {
                    'dist/css/style.min.css': ['temp/style.css']
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/js/combined.min.js': ['temp/combined.js']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions', '> 1%']
            },
            dist: {
                src: 'src/css/style.css',
                dest: 'temp/style.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Register default tasks
    grunt.registerTask('default', ['autoprefixer', 'cssmin', 'concat:js', 'uglify']);
}
