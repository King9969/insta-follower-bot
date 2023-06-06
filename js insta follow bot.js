setInterval(function() {
  document.querySelector('.button-2IFFQ4').click();
}, 10000);

(() => {
  let i = 0;
  const followInterval = setInterval(() => {
    if (i >= 30) {
      clearInterval(followInterval);
      return;
    }
    const buttons = document.querySelectorAll('button');
    const nextButton = buttons[i];
    nextButton.click();
    i++;
  }, 1000);
  console.log("intervalID => ", followInterval);
})();
