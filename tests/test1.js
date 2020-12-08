module.exports = {
    'Demo test' : function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.titleContains('React App')// myGlobalVar == "some value"
    }
  };
  
  