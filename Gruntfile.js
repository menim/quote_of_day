module.exports=function(grunt){
  grunt.initConfig({
   pkg:grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator:';'
      },
      dist: {
        src:['js/quote.js','js/swipe.js'],
        dest:'dist/myown.js'
      }
    },
    /*uncss: {
      dist:{
        files:[
          { src:'index.html', dest:'dist/myown.css'}
        ]
      }
    },*/
    uglify: {
      my_target: {
        files:{
          'dist/myown.js':['dist/myown.js']
        }
      }
    },
    jshint: {
      files:['dist/myown.js'],
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
        files: [
          {
            src:'css/qoute.css',
            dest:'dist/quote.css'
          }
        ]
      }
    },
    concat_css: {
      options: {
      },
      all: {
        src: ["css/bootstrap.min.css","css/font-awesome.min.css","css/myown.css"],
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
            "Explorer 9",
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
          server: './../fraza-dnya.ru'
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

  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('ondev', ['postcss','cssmin','htmlmin','uglify']);
};