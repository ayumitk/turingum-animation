document.addEventListener('DOMContentLoaded',function(){
  // array with texts to type in typewriter
  const dataText = document.querySelector("h1").textContent;
  
  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1)
      }, 100);
    }
  }

  // start the text animation
  typeWriter(dataText, 0);
});
