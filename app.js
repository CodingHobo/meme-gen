const memeForm = document.querySelector('#memeForm');
const image = document.querySelector('#url');

const topText = document.querySelector('#top');
const bottomText = document.querySelector('#bottom');
const container = document.querySelector('#container');

memeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const memeDiv = document.createElement('DIV');
  const newMeme = document.createElement('IMG');
  const topTextDiv = document.createElement('DIV');
  const bottomTextDiv = document.createElement('DIV');


  newMeme.src = image.value;
  newMeme.classList.add('meme-img');


  topTextDiv.classList.add('top-text');
  bottomTextDiv.classList.add('bottom-text');
  topTextDiv.innerText = topText.value;
  bottomTextDiv.innerText = bottomText.value;

  memeDiv.classList.add('container');
  memeDiv.append(newMeme);
  memeDiv.append(topTextDiv);
  memeDiv.append(bottomTextDiv);

  container.append(memeDiv);
  memeForm.reset();
})



