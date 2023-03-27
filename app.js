const memeForm = document.querySelector('#memeForm');
const image = document.querySelector('#url');

const topText = document.querySelector('#top');
const bottomText = document.querySelector('#bottom');
const container = document.querySelector('#container');

memeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // const memeSpan = document.createElement('span');
  const memeDiv = document.createElement('div');
  const newMeme = document.createElement('img');
  const topTextDiv = document.createElement('div');
  const bottomTextDiv = document.createElement('div');


  newMeme.src = image.value;
  newMeme.classList.add('meme-img');


  topTextDiv.classList.add('top-text');
  bottomTextDiv.classList.add('bottom-text');
  topTextDiv.innerText = topText.value;
  bottomTextDiv.innerText = bottomText.value;


  memeDiv.append(newMeme);
  memeDiv.append(bottomTextDiv);
  memeDiv.append(topTextDiv);
  memeDiv.classList.add('container');



  container.append(memeDiv);
  memeForm.reset();
})

container.addEventListener('click', function(e) {
  if (e.target.className === 'meme-img' ) {
    e.target.parentElement.remove();
  }
});


