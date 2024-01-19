const imgUrl = document.querySelector('#img-url');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const submitBtn = document.querySelector('#submit-btn');
const memeSection = document.querySelector('#section-memes');

submitBtn.addEventListener('click', getMeme);

function getMeme(e) {
  e.preventDefault();
  if (!imgUrl.value || !topText.value || !bottomText.value) {
    alert('Please enter all fields!');
  }
}