const imgUrl = document.querySelector('#img-url');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const submitBtn = document.querySelector('#submit-btn');
const memeSection = document.querySelector('#section-memes');

submitBtn.addEventListener('click', createMeme);

function createMeme(e) {
  e.preventDefault();
  if (!imgUrl.value || (!topText.value && !bottomText.value)) {
    alert('Please enter URL and at least one text field!');
    return;
  }
  const imgContainer = document.createElement('div');
  const memeImg = document.createElement('img');
  const topTextDiv = document.createElement('div');
  const bottomTextDiv = document.createElement('div');

  topTextDiv.appendChild(document.createTextNode(topText.value));
  bottomTextDiv.appendChild(document.createTextNode(bottomText.value));

  memeImg.setAttribute('src', imgUrl.value);
  memeImg.classList.add('meme-img');

  imgContainer.classList.add('img-container');
  topTextDiv.classList.add('top-text');
  bottomTextDiv.classList.add('bottom-text');

  imgContainer.appendChild(topTextDiv);
  imgContainer.appendChild(bottomTextDiv);
  imgContainer.appendChild(memeImg);
  memeSection.appendChild(imgContainer);
  imgUrl.value = '';
  topText.value = '';
  bottomText.value = '';
}
