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

/**
 * Define Global Variables
 * 
*/
const listnav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build menu 
function createNave () {
   for(section of sections) {
    list = document.createElement('li');
    list.innerHTML =`<li><a class='menu__link'href='#${section.id}'class="active">${section.dataset.nav}</a></li>`;
    listnav.appendChild(list);   
   }
    } 
createNave();

//SCROLL BEHAVIOR
function scrollSmooth(list,section){ list.addEventListener('click',function(e){
        e.preventDefault();
        window.scrollTo({behavior:smooth})
    })
}

// Set sections as active
const navLi = document.querySelectorAll(".menu__link")

window.onscroll = function activeSection (){
    sections.forEach((section, index)=>{
        if (section.getBoundingClientRect().top <= 200 &&
         section.getBoundingClientRect().bottom >= 250){

            section.classList.add("your-active-class");
            navLi[index].classList.add("active__link");
        } else{
            section.classList.remove("your-active-class");
            navLi[index].classList.remove("active__link");
        }
    })
}



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/





