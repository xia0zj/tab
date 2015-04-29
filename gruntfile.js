module.exports = function(grunt) {
    var port = {
        livereload : Math.ceil(Math.random()*(30000-26000)+26000),
        src        : Math.ceil(Math.random()*(9999-6001)+6001),
        dest       : Math.ceil(Math.random()*(9999-6001)+6001)
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            livereload: {
                options: {
                    livereload: port.livereload
                },
                files: [
                    'doc/*.*',
                    'src/jquery.tab.js'
                ]
            }
        },

        connect: {
            options: {
                hostname: "",
                livereload: port.livereload
            },
            doc: {
                options: {
                    port: port.src,
                    open: "http://localhost:" + port.src
                }
            }
        },

        uglify: {
            options: {

            },
            main: {
                files: {'dist/jquery.tab.min.js': 'src/jquery.tab.js'}
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['connect:doc', 'watch']);
    grunt.registerTask('build', ['uglify']);
}
