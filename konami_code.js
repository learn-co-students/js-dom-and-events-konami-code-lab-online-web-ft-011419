const input = document.querySelector("body")

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {

  let konamiIndex = 0

  input.addEventListener("keydown", function(e) {
    const key = parseInt(e.which);

    if (key === code[konamiIndex]) {
      konamiIndex++;
  
      if (konamiIndex === code.length) {
        alert ("Congrats!");
  
        konamiIndex = 0
      }
      
    } else {

      konamiIndex = 0

    }
  })

}

init();


