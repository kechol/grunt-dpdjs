# grunt-dpdjs

This task generate local dpd.js file for deployd.

## Getting Started
This plugin requires Grunt `>= 0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dpdjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dpdjs');
```

## The "dpdjs" task

### Overview
In your project's Gruntfile, add a section named `dpdjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dpdjs: {
    options: {
        serverPath: './',
        // 
        dest: 'tmp/dpd.js'
    }
  },
});
```

### Options

#### options.serverPath
Type: `String`
Default value: `'./'`

Base path for find `resources` dir.

#### options.dest
Type: `String`
Default value: `'public/js/dpd.js'`

A Path to distribute dpd.js.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
