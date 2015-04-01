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
                    './build/tmp/app.css': './src/scss/app.scss',
                    './build/tmp/print.css': './src/scss/print.app.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                src: './build/tmp/app.css',
                dest: './build/tmp/app.css'
            }
        },
		
		tinypng: {
		  options: {
			apiKey: "YOUR API KEY HERE",
			showProgress: true
		  },
		  assets: {
			expand: true,
			cwd: 'src/assets/',
			src: 'images/*.*',
			dest: 'build/'
		  },
		},
		
		cssmin: {
		  minify: {
			files: [{
			  expand: true,
			  cwd: 'build/tmp/',
			  src: ['*.css', '!*.min.css'],
			  dest: 'build/',
			  ext: '.min.css'
			}]
		  }
		},

        copy: {
            html: {
                src: './src/index-dev.html',
                dest: './build/index.html'
            },
			fonts: {
                expand: true,
                cwd: './src/assets/fonts/',
                src: '*.*',
                dest: './build/fonts/'
            },
            libs: {
                expand: true,
                cwd: './src/lib/',
                src: '**',
                dest: './build/lib/'
            }
        },

        watch: {
            styles: {
                files: ["./src/scss/*.scss"],
                tasks: ["make-styles", "cssmin:minify", "clean:tmp"]
            },
            index: {
                files: ["./src/index-dev.html"],
                tasks: ["copy:html"]
            }
        },

        clean: {
            build: {
                src: ["./build"]
            },
			tmp: {
                src: ["./build/tmp"]
            }
        }
    });

    grunt.registerTask('default', ['clean:build', 'copy:html', 'copy:libs', 'copy:fonts', 'tinypng:assets', 'make-styles', 'cssmin:minify', 'clean:tmp']);
    grunt.registerTask('make-styles', ["sass:dist", "autoprefixer:dist"])
    grunt.registerTask('clean-build', ['clean:build']);
};