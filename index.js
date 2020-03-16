
//for page load
window.addEventListener('load', (event) => {
  let status = undefined;

  fetch('https://answers.library.brandeis.edu/1.0/chat/widgets/status/9616')
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      status = data.online;

      if (status === true) {
        document.getElementById("lcs_slide_out_button-9616").innerText = "Chat with a Librarian"
      } else {
        document.getElementById("lcs_slide_out_button-9616").innerText = "Ask a Librarian"
      }

    });
})

//for continued checking
setInterval(function () {

  let status = undefined;

  fetch('https://answers.library.brandeis.edu/1.0/chat/widgets/status/9616')
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      status = data.online;

      if (status === true) {
        document.getElementById("lcs_slide_out_button-9616").innerText = "Chat with a Librarian"
      } else {
        document.getElementById("lcs_slide_out_button-9616").innerText = "Ask a Librarian"
      }

    });


}, 60000);

