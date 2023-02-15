/* Get the ul element */
const navBar = document.getElementById("navbar__list")
// Get all the sections on the page
const Sections = Array.from(document.querySelectorAll("section"))

function createSectionList () {
    // Loop through the Sections array
   Sections.forEach(sec => {
    // Create a variable to store the HTML for the ul element
        navElement = document.createElement("li");
    // Use the innerHTML property to insert the HTML into the ul element
        navElement.innerHTML = `<li> <a data-nav="#${sec.id}" class="menu__link"> ${sec.dataset.nav} </a> </li>`;
         navBar.appendChild(navElement)   
         scrollBehavior( navElement , sec);
       });
}

createSectionList()

/* Add an event listener to the window to listen for scroll events */
window.addEventListener('scroll',(event)=>{
    const activeLink = document.querySelectorAll(".menu__link")
// Loop through all the sections
    Sections.forEach((section, i)=>{
// Get the bounding rect of the current section
      const boxSec = section.getBoundingClientRect();
// Check if the top of the section is within the viewport
      if (boxSec.top <= 150 && boxSec.top >= -400)
// Add the active-section class to the current section
      { section.classList.add("your-active-class");
          activeLink[i].classList.add("active-link");
      } else{
// Remove the active-section class 
        section.classList.remove("your-active-class");
        activeLink[i].classList.remove("active-link");
      }
  })


// Declare a variable to check when the user is not scrolling
    let isScrolling;
// Assign setTimeout to the variable
isScrolling = setTimeout(function(){ 
// If the user hasn't scrolled while setTimeout is running then hide the fixed navigation bar
    navBar.style.display = 'none';
}, 4000);

// Cancels the timeout if the user scrolls again
window.addEventListener('scroll', function(){
    navBar.style.display = "block"
    clearTimeout(isScrolling)
});
})

//  smooth scroll when clicking on section button 
function scrollBehavior( list, sec){
    list.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: sec.offsetTop,
            behavior:"smooth"
        });
    });
 }








