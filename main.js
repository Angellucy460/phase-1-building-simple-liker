// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Error modal element
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');  //hide modal on initial load

// hearts elements
const hearts = document.querySelectorAll('.like-glyph');

// add click event listeners to each heart
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall().then(() => {
      // toggle heart appearance on success
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    }).catch(error => {
      // show modal with error message
      const modalMessage = document.getElementById('modal-message');
      modalMessage.textContent = error;

      errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
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
