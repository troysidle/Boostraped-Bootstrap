/* This is code adopted from BootstrapMade.com.

I don't know exactly the functionality of all this code, especially the "e.addEventListener" line*/


(function () {"use strict"; /*all variables must be declared*/

              
  /* Easy selector helper function defines select */
    
 const select = (el, all = false) => 
 {
    el = el.trim() /*trim white space from a string*/
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* Easy event listener function defines the on function*/
  
  const on = (type, el, listener, all = false) => 
  {
    let selectElement = select(el, all)
    if (selectElement) {
      if (all) {
        selectElement.forEach(e => e.addEventListener(type, listener)) /*parse an array*/
      } else {
        selectElement.addEventListener(type, listener)
      }
    }
  }


  /* Mobile nav toggle */
  
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active') /*toggle the class to show the navigation menu*/
    this.classList.toggle('bi-list') /*toggle the class to show the menu (list) icon*/
    this.classList.toggle('bi-x') /*toggle the class to show the X icon*/
  })

})()