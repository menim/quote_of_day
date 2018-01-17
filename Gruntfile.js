module.exports=function(grunt){
  grunt.initConfig({
   pkg:grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator:';'
      },
      dist: {
        src:['js/quote.js','js/swipe.js'],
        dest:'dist/js/myown.js'
      }
    },
    uglify: {
      my_target: {
        files:{
          'dist/js/myown.js':['dist/js/myown.js'],
          'dist/service-worker.js':['dist/service-worker.js']
        }
      }
    },
    jshint: {
      files:['dist/js/myown.js'],
      options: {
        globals: {
          jQuery:true,
          console:true,
          module:true,
          document:true
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments:true,
          collapseWhitespace:true
        },
        files: {
          'dist/index.html':'index.html'
        }
      }
    },
    htmllint: {
      all:['index.html']
    },
    csslint: {
      src: ['css/quote.css']
    },
    imageoptim: {
      myTask: {
        options: {
          jpegMini:false,
          imageAlpha:true,
          quitAfter:true
        },
        src: ['pictures']
      }
    },
    cssmin: {
      target: {
         files: [{
          'dist/css/myown.css':'css/quote.css'
         },
         {
            expand: true,
            src: ['*.css'],
            dest:'css/quote.css',
            ext: '.min.css'
          }]
      }
    },
    concat_css: {
      options: {
      },
      all: {
        src: [],
        dest:"dist/myown.css"
      }
    },
    postcss: {
      options: {
        map: {
          inline: false,
        },

        processors: [
          require('autoprefixer')([
            "Android 2.3",
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 3",
            "Explorer >= 9",
            "iOS >= 6",
            "Opera >= 8",
            "Safari >= 6"
          ])
        /*require('cssgrace'),*/
        ]
      },
      dist: {
        src: 'css/quote.css'
      }
    },
    uncss: {
      dist: {
        files: {
          'dist/myown.css':['index.html']
        }
      }
    },
    'sw-precache': {
      options: {
        cacheId: 'quote-of-day',
        workFileName: 'service-worker.js',
        verbose: true,
      },
      'default': {
        staticFileGlobs: [
          'index.html',
          'css/**/*.css',
          'fonts/**/*.{woff,ttf,svg,eot}',
          'pictures/**/*.{gif,png,jpg}',
          'js/**/*.js',
        ],
      }
    },
    watch: {
      files: ['index.html','css/*.css','js/*.js'],
      tasks: []
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            'index.html']
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },
    stylelint: {
      simple: {
        options: {
          configFile: './.stylelintrc.json',
          format: 'css'
        },
        src:'css/myown.css'
      }
    },
    critical: {
      dist: {
        options: {
          base: './'
        },
        src: 'index.html',
        dest: 'index.html'
      }
    }
  });   
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.loadNpmTasks('grunt-sw-precache');
  grunt.loadNpmTasks('grunt-critical');

  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('ondev', ['postcss','cssmin','htmlmin','concat','uglify']);
};