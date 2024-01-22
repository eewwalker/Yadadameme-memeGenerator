
/* HTML ELEMENTS SELECTORS */

const imgUrl = document.querySelector('#img-url');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const submitBtn = document.querySelector('#submit-btn');
const memeResults = document.querySelector('#meme-results');

/* EVENT LISTENERS */
submitBtn.addEventListener('click', displayMeme);

/* FUNCTIONS */

function displayMeme(e) {
  e.preventDefault();
  if (!imgUrl.value || (!topText.value && !bottomText.value)) {
    alert('Please enter URL and at least one text field!');
    return;
  }
  const meme = createMeme();
  memeResults.appendChild(meme);
  clearInputs(imgUrl, topText, bottomText);
}


function createMeme() {
  const memeContainer = document.createElement('div');
  memeContainer.classList.add('meme-container');

  const memeImg = document.createElement('img');
  memeImg.setAttribute('src', imgUrl.value);
  memeImg.classList.add('meme-img');

  const topTextDiv = document.createElement('div');
  const bottomTextDiv = document.createElement('div');
  topTextDiv.appendChild(document.createTextNode(topText.value));
  bottomTextDiv.appendChild(document.createTextNode(bottomText.value));
  topTextDiv.classList.add('top-text');
  bottomTextDiv.classList.add('bottom-text');

  const deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('X'));
  deleteBtn.classList.add('delete-btn');

  memeContainer.append(memeImg, topTextDiv, bottomTextDiv, deleteBtn);

  deleteBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  return memeContainer;

}

function clearInputs(imgUrl, topText, bottomText) {
  imgUrl.value = '';
  topText.value = '';
  bottomText.value = '';
}
