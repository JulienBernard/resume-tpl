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
            /*
            fonts: {
                src: ['./src/assets/fonts/'],
                dest: './build/'
            },
             */
            images: {
                src: ['./src/assets/images/profile-face.png'],
                dest: './build/profile-face.png'
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
                files: ["./src/assets/fonts/*", "./src/assets/images/*"],
                /*
                tasks: ["copy:fonts", "copy:images"]
                 */
                tasks: ["copy:images"]
            }
        },

        clean: {
            build: {
                src: ["./build/*"]
            }
        }
    });

    grunt.registerTask('default', ['clean:build', 'copy:html', 'copy:images', 'make-styles']);
    grunt.registerTask("make-styles", ["sass:dist", "autoprefixer:dist"])
    grunt.registerTask('clean-build', ['clean:build']);
};