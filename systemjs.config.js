/**
 * Basic system js config for angular 2
 */
(function(global){
  var map = {
    "app": "app",
    "@angular": "node_modules/@angular",
    "rxjs": "node_modules/rxjs"
  };

  var packages = {
    "app": {main: "main.js", defaultExtension: "js"},
    "rxjs": {defaultExtension: "js"}
  };

    var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic',
    'forms'
  ];

    // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  
  System.config(config);

})(this);