/*global module*/
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {},
            dist: {
                src: ['components/app.js', 'components/controllers/*.js', 'components/factories/*.js'],
                dest: 'js/general.js',
            },
        },
        watch: {
            js: {
                files: [
                    'components/**/*.js'
                ],
                tasks: ['concat'],
                options: {
                    nospawn: true
                }
            }
        },
        jshint: {
			all: ['components/**/*.js', 'tests/**/*.js'],
			options: {
				globals: {
					_: false,
					$: false,
					jasmine: false,
					describe: false,
					it: false,
					expect: false,
					beforeEach: false
				},
				browser: true,
				devel: true
			}
		},
        testem: {
			unit: {
				options: {
					framework: 'jasmine2',
					launch_in_dev: ['PhantomJS'],
					//before_tests: 'grunt jshint',
					serve_files: [
						'node_modules/angular/angular.min.js',
						'node_modules/angular-ui-router/release/angular-ui-router.min.js',
						'node_modules/angular-mocks/angular-mocks.js',
						'components/**/*.js',
						'tests/**/*.js'
					],
					watch_files: [
						'components/**/*.js',
						'tests/**/*.js',
					]
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-testem');
    
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Default tasks
    grunt.registerTask('default', ['concat', 'watch']);
    grunt.registerTask('test', ['testem:run:unit']);
};