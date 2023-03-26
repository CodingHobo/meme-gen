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



  // const memeDiv = document.createElement('div');
  // memeDiv.append(addTextToImg(img, input1, input2));


  // container.append(memeDiv);
  // memeForm.reset();
})

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.remove();
  }
});

// function addTextToImg (img, input1, input2) {
//   const newMemeImg = document.createElement('img');
//   newMemeImg.src = image.value;
//   img = newMemeImg;

//   const topTextDiv = document.createElement('div');
//   input1 = topText.value;
//   input1.classList.add('top-text');
//   topTextDiv.innerText = input1;

//   const bottomTextDiv = document.createElement('div');
//   input2 = bottomText.value;
//   input2.classList.add('bottom-text');
//   bottomTextDiv.innerText = input2;

//   img.append(topTextDiv);
//   img.append(bottomTextDiv);
// }


