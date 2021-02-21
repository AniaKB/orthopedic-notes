function revealTxt() {
  var x = document.getElementById("head");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function toggleDocs(event) {

  if (event.target && event.target.className == 'clickable-heading') {

      var next = event.target.nextElementSibling;


      if (next.style.display == "none") {
          next.style.display = "block";

      } else {
          next.style.display = "none";
      }
  }
}

document.addEventListener('click', toggleDocs, true);