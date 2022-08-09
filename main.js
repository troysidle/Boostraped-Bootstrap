// function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // Immediately invoked function to set the theme on initial load
        (function () 
            {
                setTheme('monochromeGreen');
            }
        )();


/* This is edited code adopted from BootstrapMade.com. */


(function () {"use strict"; /*all variables must be declared*/

              
  /* Easy selector helper function defines select */
  /* This function seems to indicate which elements have classes that have been selected. */
    
 const select = function (elements, all = false)
 {
    elements = elements.trim() /*trim white space from a string*/
    if (all) {
      return [...document.querySelectorAll(elements)]
    } else {
      return document.querySelector(elements)
    }
  }

  /* Easy event listener function defines the on function */
  /* This function seems to indicate which elements have classes that are activated. */
 
  const on = function (type, elements, listener, all = false) 
  {
    let selectElement = select (elements, all)
    if (selectElement) {
      if (all) {
        selectElement.forEach(eventAction => eventAction.addEventListener(type, listener)) /*parse an array*/
      } else {
        selectElement.addEventListener(type, listener)
      }
    }
  }


  /* Mobile nav toggle */
  /* Using the select and on, toggle elements as needed. */
  
  on('click', '.mobile-nav-toggle', function(eventAction) {
    select('body').classList.toggle('mobile-nav-active') /*toggle the class to show the navigation menu*/
    this.classList.toggle('bi-list') /*toggle the class to show the menu (list) icon*/
    this.classList.toggle('bi-x') /*toggle the class to show the X icon*/
  })
              
              
/*toggle off the sliding navigation bar when user clicks outside of it*/
 /*in process*/
              
// Get the modal



  

})()