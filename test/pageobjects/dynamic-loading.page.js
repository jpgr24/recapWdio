const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

  class DynamicLoadingPage extends Page {

    /**
     * Your selectors go here
     */
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
get startButton() {
          return $('#start button'); //uses Element with certain text selector
     }
    /**
     * overwrite specific options to adapt it to page object
     */
     async startClick() {
        await this.startButton.click();
    }
    get htest(){
        return $('#finish h4');
    }
    open() {
        return super.open('dynamic_loading/1');
    }
}

module.exports = new  DynamicLoadingPage();