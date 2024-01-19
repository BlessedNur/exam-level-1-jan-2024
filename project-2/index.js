const colorOne = document.querySelector('.color-one'),
  colorTwo = document.querySelector('.color-two'),
  colorThree = document.querySelector('.color-three'),
  colors = document.querySelectorAll('.colors div');

function removeOff() {

  colors.forEach(col => {
    if (col.classList.contains('col-one-off')) {
      col.classList.remove('col-one-off');
    }
  });
}


colorOne.addEventListener('click', () => {
  removeOff()
  colorOne.classList.toggle('col-one-off');
  colorOne.style.outline = '2px solid blue';
});

colorTwo.classList.add('col-one-off');
colorTwo.style.outline = '2px solid red';

colorTwo.addEventListener('click', () => {
  removeOff()
  colorTwo.classList.toggle('col-one-off');
  colorTwo.style.outline = '2px solid red';


});

colorThree.addEventListener('click', () => {
  removeOff()
  colorThree.classList.toggle('col-one-off');
  colorThree.style.outline = '2px solid yellow';

});

