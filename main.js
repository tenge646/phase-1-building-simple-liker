// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  // Add the .hidden class to the error modal initially
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  // Function to toggle the heart states
  function toggleHeart(heart) {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.classList.add("activated-heart");
    } else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  }

  // Function to handle like button click
  function likeButtonClick(event) {
    const likeButton = event.target;
    mimicServerCall()
      .then(() => {
        toggleHeart(likeButton);
      })
      .catch((error) => {
        const modalMessage = document.getElementById("modal-message");
        modalMessage.textContent = error;
        errorModal.classList.remove("hidden");

// Hide the error modal after 3 seconds
setTimeout(() => {
  errorModal.classList.add("hidden");
}, 3000);
  });
  }

  // Attach click event listeners to all like buttons
  const likeButtons = document.querySelectorAll(".like");
  likeButtons.forEach((button) => {
    button.addEventListener("click", likeButtonClick);
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
