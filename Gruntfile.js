module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ts: {
            default: {
                src: ["src/script/**/**/*.ts", "!node_modules/**"],
                dest: "src/script/script.js"
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'src/style/style.css': 'src/style/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
            ts: {
                files: ['**/*.ts', '**/**/*.ts', '**/**/**/*.ts', '**/**/**/**/*.ts'],
                tasks: ['ts'],
                options: {
                    spawn: false,
                },
            },
            handlebars: {
                files: ['src/script/**/*.hbs'],
                tasks: ['handlebars'],
                options: {
                    spawn: false,
                },
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: function (filename) {
                        //var s  = filename.substring(filename.lastIndexOf('/'), )

                        //var names = filename.replace(/src\/script\/templates\/(.*)\.hbs/, '$1');
                        //return names.split('/').join('.');
                        return "app.templates";
                    },
                    processName: function (filename) {  // input: templates/_header.hbs
                        console.log(filename);
                        return filename.replace(/src\/script\/templates\/(.*)\.hbs/, '$1')
                        //var pieces = filePath.split('/');
                       // return pieces[pieces.length - 1];       // output: _header.hbs
                    }
                },
                files: {
                    'src/script/template.js': ['src/script/**/*.hbs']
                }
            }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['ts', 'sass','watch']);
};
