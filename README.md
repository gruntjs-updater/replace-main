# grunt-replace-main

> use to replace data-main attribute

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-replace-main --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-replace-main');
```

## The "replace_main" task

### Overview
In your project's Gruntfile, add a section named `replace_main` to the data object passed into `grunt.initConfig()`.
There is file structure 
- Gruntfile.js
- Scripts
  -srcscriptname.js
-(path)src.html

```js
grunt.initConfig({
  replace_main: {
    your_target: {
       modules:[{
          name:'srcscriptname',
          out:'destinationscriptname',
          path:'html path relative to gruntfile'
        }]
    },
  },
})
```

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  replace_main: {
    modules:[{
      name:'test',
      out:'test_add',
      path:'test/fixtures'
    }]
  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

