# Resume-tpl #

An open and free **HTML template** to make your own **awesome resume**! Built with Sass, fully configurable. Wow!

[See an example (online)](http://www.jibidev.fr/resume/index.html)

## Getting started ##

### Requirement ###

Resume-tpl require [Node.js](http://nodejs.org/ "Click and go to nodejs.org") in order to run Grunt tasks and build properly the project (compile, minify, concat etc.).

But if you just want the original sources, you don't need anything in particular.

### Configuration ###

You have Node.js? Great! Now install the modules by doing this on your console: `npm install`

```
Don't forget to install the famous task runner Grunt in global on your machine: npm install grunt-cli -g  
```

The build process works with a simple command: type in your console `grunt` to launch the default Grunt task!

By doing this, a new folder "build" should be appear. It contain an HTML file `index.html` and it stylesheets: `app.min.css` and `print.min.css`. Just launch `index.html` in your favorite browser and see the result :)

### Grunt tasks : ###

- `grunt` or `grunt default` - the easier way to build the project (check *build/* folder for the result!)
- `grunt make-styles` - convert SCSS to CSS files, minify them and add the CSS prefixes to *build/app.css*
- `grunt clean` - remove all the files contains in the build folder

Don't forget to use the `watch` task when you are setting up and filling your resume!

- `grunt watch` - wait an update on the SCSS or HTML files

## Licence ##
Under GPL 2.0 licence. Read more about this licence [here](http://www.gnu.org/licenses/gpl-2.0.html "Click to read more about the GPL licence").

### Ressources and authors ###

- Icon made by Freepik from www.flaticon.com is licensed under CC BY 3.0 [(Source)](http://www.flaticon.com/free-icon/personal-card_65103)
- Icon made by Freepik from www.flaticon.com is licensed under CC BY 3.0 [(Source)](http://www.flaticon.com/free-icon/user-location_69078)
- Icon made by Freepik from www.flaticon.com is licensed under CC BY 3.0 [(Source)](http://www.flaticon.com/free-icon/phone-auricular-black-shape_16603)
- Icon made by Freepik from www.flaticon.com is licensed under CC BY 3.0 [(Source)](http://www.flaticon.com/free-icon/mail-envelope_62032)
- Icon made by Daniel Bruce from www.flaticon.com is licensed under CC BY 3.0 [(Source)](http://www.flaticon.com/free-icon/github-head-logo_23586)
- Font Awesome by Dave Gandy - [(Source)](http://fontawesome.io)


## Author ##
This sample was made by Julien Bernard ([http://jibidev.fr](http://jibidev.fr "Click and go to jibidev.fr")), a young French developer (Grenoble, France).