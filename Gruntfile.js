module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build/*'],
    sass: {
      dist: {
        options: {
          style: 'compressed',
        },
        files: [
          {
            expand: true,
            cwd: 'src/styles',
            src: ['**/*.scss'],
            dest: 'src/styles',
            ext: '.css',
          },
        ],
      },
    },
    copy: {
      files: {
        expand: true,
        cwd: 'src',
        src: [
          '**/*.ttf',
          '**/*.css',
          '**/*.scss.map',
          '**/*.html',
          'img/*',
          '**/*.js',
        ],
        dest: 'build/',
      },
    },
    prettier: {
      files: {
        src: ['Gruntfile.js', 'src/**/*.scss', 'src/**/*.html'],
      },
    },

    // only watch html and scss, we don't expect any JS coding here
    watch: {
      scripts: {
        files: ['src/**/*.html', 'src/**/*.scss'],
        tasks: ['sass', 'copy'],
        options: {
          interrupt: true,
        },
      },
    },
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-prettier')

  grunt.registerTask('build', ['clean', 'sass', 'prettier', 'copy'])
}
