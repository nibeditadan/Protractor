var HtmlReporter = require('protractor-beautiful-reporter');
 

exports.config = {
 
  framework: 'jasmine2',
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Report/screenshots'
    }).getJasmine2Reporter());
 },
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],

  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
        'w3c': false
    }
  }
};