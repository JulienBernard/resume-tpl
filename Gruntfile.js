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
            html: {
                src: './src/index-dev.html',
                dest: './build/index.html'
            },
            assets: {
                expand: true,
                cwd: './src/assets/',
                src: '**',
                dest: './build/'
            }
        },

        watch: {
            styles: {
                files: ["./src/scss/*.scss"],
                tasks: ["make-styles"]
            },
            index: {
                files: ["./src/index-dev.html"],
                tasks: ["copy:html"]
            },
            assets: {
                files: ["./src/assets/*"],
                tasks: ["copy:assets"]
            }
        },

        clean: {
            build: {
                src: ["./build/*"]
            }
        }
    });

    grunt.registerTask('default', ['clean:build', 'copy:html', 'copy:assets', 'make-styles']);
    grunt.registerTask("make-styles", ["sass:dist", "autoprefixer:dist"])
    grunt.registerTask('clean-build', ['clean:build']);
};