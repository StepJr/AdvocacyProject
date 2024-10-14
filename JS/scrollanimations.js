let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

// Define a variable to store all elements with the class 'revealable'
let revealableContainers = document.querySelectorAll('.revealable');

// Define a function called 'reveal'
function reveal() {
  // Loop through each element with the class 'revealable'
  for (let i = 0; i < revealableContainers.length; i++) {
    // Check the position of the current 'revealable' element
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    // Check if the current 'revealable' element is in the viewport
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // If it's in the viewport, add the 'active' class
      revealableContainers[i].classList.add('active');
    } else {
      // If it's not in the viewport, remove the 'active' class
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Call the 'reveal' function when the window is scrolled
window.addEventListener('scroll', reveal);

