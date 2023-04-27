const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/**
 * The following code updates the rocket ship icon to give it a launch animation
 * @author Joban <https://github.com/JobanSD>
 */

// get rocketShip element
var rocketShip = document.querySelector('i.fas.fa-rocket');

// listen to page scroll events
addEventListener("scroll", (event) => {
    // detects if window is at the top of the page
    if (window.scrollY <= 0) {
        // revert ship back to normal
        rocketShip.classList.remove('fa-rocket-launch');
        rocketShip.classList.add('fa-rocket');
        rocketShip.style = "color: #ffffff;"
    }
});

/**
 * Changes rocket ship icon and scrolls page to top
 */
function launchRocket() {
    // change ship icon
    rocketShip.classList.remove('fa-rocket');
    rocketShip.classList.add('fa-rocket-launch');
    rocketShip.style = "color: #ff004f;"
    
    // scroll to top of page
    window.scrollTo({top: 0, behavior: "smooth"});
}
