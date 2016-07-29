
(function(global) {

  // map tells the System loader where to look for things.
  var map = {
    'app':                        'app',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs',
    '@angular2-material':         'node_modules/@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'boot.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });

 var materialPkgs = [ 
   'core', 
   'toolbar', 
   'icon', 
   'button', 
   'sidenav', 
   'list', 
   'card', 
   'input',
   'checkbox',
   'radio' 
 ];  
 
 materialPkgs.forEach(function(pkg) { 
   packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`}; 
 });   


  var config = {
    map: map,
    packages: packages
  }
  System.config(config);

})(this);
