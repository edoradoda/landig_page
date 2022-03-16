/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

const uls=document.querySelectorAll('ul');
const sections=document.querySelectorAll('section')
buildNav();

document.addEventListener("scroll", function() {
  makeActive();
});

/**
* @description build the navbar from the sections
* @global sections and uls 
*/
function buildNav() {
  for (section of sections) {
    let titleLi=section.dataset.nav
    let lis=document.createElement('li');
    lis.textContent=titleLi;
    lis.setAttribute("id",`li${titleLi}` );
    lis.addEventListener('click', scrollToSection);
    uls[0].appendChild(lis);
  }
}


/**
* @description listener for click event on "li" , scroll to corresponding section 
* @event  click event  on "li" tag
*/
function scrollToSection(event) {
  let li=event.target
  let nameSection=li.textContent;
  const section = document.querySelector(`[data-nav="${nameSection}"]`);
  section.scrollIntoView();
  // console.log("scrolling",event.target,nameSection,section)
}



/**
* @description make active a section while scrolling and active a "li" of navbar
* @global  sections 
*/
function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      let titleLi=section.dataset.nav
      let currentLi=document.getElementById(`li${titleLi}`)
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 150 && box.bottom >= 150) {
        // Apply active state on the current section and the corresponding Nav link.
        section.classList.add('your-active-class');
        currentLi.classList.add('menu__link')
       
      } else {
        section.classList.remove('your-active-class');
        currentLi.classList.remove('menu__link')
        // Remove active state from other section and corresponding Nav link.
      }
    }
  }