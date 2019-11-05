
var xl=require("./datafile.json");




describe('Read from Excel',function(){


  beforeEach(function() {
    browser.get("https://angular.io");
    
  })
    
    
  xl.forEach(function(data) {

  it('TC1',function(){

   // browser.get("https://angular.io");
  
    element(by.xpath("//input[@placeholder='Search']")).sendKeys(data.Password);
    });

  });
});