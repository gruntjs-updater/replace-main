/*
 * grunt-replace-main
 * https://github.com/xzhang/replace-main
 *
 * Copyright (c) 2013 xzhang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var path = require('path');
  var fs = require('fs');
  grunt.registerMultiTask('replace_main', 'Your task description goes here.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({

    });

    this.data.modules.forEach(function(m) {
      var filepath = unixifyPath(path.join(process.cwd(), m.path, m.name + '.html'));

      if (grunt.file.exists(filepath)) {
        grunt.verbose.writeln('reading ' + filepath);
        var src = grunt.file.read(filepath);
        grunt.verbose.writeln('replacing');
        src = src.replace('data-main="Scripts/' + m.name + '"', 'data-main="Scripts/' + m.out + '"');
        grunt.file.write(filepath, src);
        grunt.log.write(filepath + ' updated!');
      } else {
        grunt.log.write(filepath + ' not found!');
      }
    });
  });
  var unixifyPath = function(filepath) {
    if (process.platform === 'win32') {
      return filepath.replace(/\\/g, '/');
    } else {
      return filepath;
    }
  };
};