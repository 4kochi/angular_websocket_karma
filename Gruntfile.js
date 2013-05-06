'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            e2e: {
                configFile: 'config/karma-e2e.conf.js'
            }
        }
    });

    // Load tasks.
    grunt.loadNpmTasks('grunt-karma');

    // Tasks
    grunt.registerTask('e2e', ['karma']);

    // Default task.
    grunt.registerTask('default', ['e2e']);
};