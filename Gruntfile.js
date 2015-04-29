module.exports = function(grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		dev: "src",

		prod: "build",

		// Validate JS
		jshint: {
			all: [
				"Gruntfile.js",
				"<%= dev %>/js/**/*.js"
			]
		},


		// Less compiler
		less: {
			css: {
				files: {
					'<%= dev %>/css/<%= pkg.name %>.css': '<%= dev %>/css/less/main.less'
				},
				options: {
					//compress: true,
					//cleancss: true,
					sourceMap: true,
					sourceMapFilename: '<%= dev %>/css/<%= pkg.name %>.css.map',
					sourceMapRootpath: '../../',
					sourceMapURL: '<%= pkg.name %>.css.map'
				},
			}
		},

		// Auto vendor prefixes
		autoprefixer: {
			options: {
				browsers: ['last 4 versions']
			},
			css: {
				files: {
					'<%= dev %>/css/<%= pkg.name %>.css': '<%= dev %>/css/<%= pkg.name %>.css'
				}
			}
		},

		notify: {
			task_name: {
				options: {
				// Task-specific options go here.
				}
			},
			watch: {
				options: {
					//title: '',
					message: 'Less and Uglify finished running', //required
				}
			}
		},

		useminPrepare:{
			html: '<%= dev %>/index.html',
			options:{
				dest: '<%= prod %>'
			}
		},

		usemin:{
			html:['<%= prod %>/*.html', '<%= prod %>/partials/**/*.html'],
			css: ['<%= prod %>/css/*.css'],
			options: {
				dirs: ['<%= prod %>'],
				assetsDirs: ['<%= prod %>']
			}
		},

		// ng-annotate tries to make the code safe for minification automatically
		// by using the Angular long form for dependency injection.
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/js',
					src: ['APPNAME.min.js'],
					dest: '.tmp/concat/js'
				}]
			}
		},

		clean: ['<%= prod %>'],

		copy: {
			main: {
				files: [
					// media
					{
						expand: true,
						cwd: '<%= dev %>/',
						src: [
							'css/**/*.map',
							'js/**/*.map',
							'fonts/**',
							'img/**',
							'api/**',
							'partials/**',
							'*.html',
							'*.txt',
							'*.ico',
							'*.png'
						],
						dest: '<%= prod %>/'
					}
				]
			}
		},

		filerev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 4
			},
			source: {
				files: [{
					src: [
						'<%= prod %>/**/*.{jpg,jpeg,gif,png,ico,js,css,map}'
					]
				}]
			}
		},

		version: {
			options: {
				release: 'patch'
			},
			patch: {
				src: ['package.json', 'bower.json', '<%= prod %>/js/*.js']
			},
			minor:{
				options: {
					release: 'minor'
				},
				src: ['package.json', 'bower.json', '<%= prod %>/js/*.js']
			},
			major:{
				options: {
					release: 'major'
				},
				src: ['package.json', 'bower.json', '<%= prod %>/js/*.js']
			}
		},

		// Watch Plugin
		watch: {
			less: {
				// We watch and compile less files as normal but don't live reload here
				files: ['<%= dev %>/css/**/*.less'],
				tasks: ['less', 'autoprefixer']
			}
		}
	});

	// Load project tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-filerev');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-version');
	grunt.loadNpmTasks('grunt-ng-annotate');

	// Default task(s).
	grunt.registerTask('default', ['jshint','less','autoprefixer']);
	grunt.registerTask('build', ['default', 'clean', 'copy:main', 'useminPrepare', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'filerev', 'usemin', 'version:patch']);
	grunt.registerTask('minor', ['build', 'version:minor']);
	grunt.registerTask('major', ['build', 'version:major']);
};