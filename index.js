document.addEventListener("DOMContentLoaded", function() {  function editText() {
    document.getElementById('text').textContent = 'This is really cool!'
      }
    
      editText();
    console.log("The DOM has loaded");
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

//   function editText() {
// document.getElementById('text').textContent = 'This is really cool!'
//   }

//   editText();