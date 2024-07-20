// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () =>{
  document.querySelector("#modal").classList.add("hidden");
})

// Select all like-glyph elements and attach event listeners to each
let likeGlyphs = document.querySelectorAll(".like-glyph");
likeGlyphs.forEach(likeGlyph => {
  likeGlyph.addEventListener('click', () => {
    if (likeGlyph.classList.contains('activated-heart')) {
      likeGlyph.classList.remove('activated-heart');
      likeGlyph.innerText = EMPTY_HEART; // Change back to empty heart
    } else {
      mimicServerCall()
        .then(() => {
          // On successful server response
          likeGlyph.classList.add('activated-heart');
          likeGlyph.innerText = FULL_HEART; // Change to full heart
        })
        .catch(() => {
          // On failed server response
          const errorModal = document.querySelector('#modal');
          const modalMessage = document.querySelector('#modal-message');

          modalMessage.innerText = 'Server Error. Please try again.';
          errorModal.classList.remove('hidden');

          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
     }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


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
