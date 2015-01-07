module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    './build/app.css': './src/scss/app.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                src: './build/app.css',
                dest: './build/app.css'
            }
        },

        copy: {
            dist: {
                src: './src/index-dev.html',
                dest: './build/index.html'
            }
        },

        watch: {
            styles: {
                files: ["./src/scss/*.scss"],
                tasks: ["make-styles"]
            },
            index: {
                files: ["./src/index.html"],
                tasks: ["copy:dist"]
            }
        },

        clean: {
            build: {
                src: ["./build/*"]
            }
        }
    });

    grunt.registerTask('default', ['clean:build', 'copy:dist', 'make-styles']);
    grunt.registerTask("make-styles", ["sass:dist", "autoprefixer:dist"])
    grunt.registerTask('clean-build', ['clean:build']);
};