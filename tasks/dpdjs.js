/*
 * grunt-dpdjs
 * https://github.com/Kechol/grunt-dpdjs
 *
 * Copyright (c) 2014 Kazuyuki SUZUKI
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('dpdjs', 'Generate local dpd.js file.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      serverPath: './',
      dest: 'public/js/dpd.js'
    });

    var ClientLib = require('deployd/lib/resources/client-lib'),
        Config    = require('deployd/lib/config-loader');

    var done = this.async();

    Config.loadConfig(options.serverPath, {}, function(err, resources) {
      if(err) {
        grunt.log.error(err.message);
        done(false);
      }

      // exclude internal resources
      resources = resources.slice(0, -4);

      var clientLib = new ClientLib(options.dest, { config: { resources: resources } });
      var res = {
        output: '',
        write: function(str) {
          res.output += str;
        }
      };

      clientLib.load(function() {
        clientLib.generate(res, function() {
          // Write the destination file.
          grunt.file.write(options.dest, clientLib.clientLib + res.output);

          // Print a success message.
          grunt.log.writeln('File "' + options.dest + '" created.');

          done();
        });
      });
    });
  });

};
