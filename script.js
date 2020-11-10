function moveDiv(x) {
  if (x.matches) {
    destination.appendChild(form);
    banner.appendChild(button);

  } else {
    banner.appendChild(form);
    destination.appendChild(button);
  }
}

var x = window.matchMedia("(max-width: 720px)")
moveDiv(x)
x.addListener(moveDiv)

const buttonSecond = document.getElementById("button");
buttonSecond.addEventListener('click', function () {
  var elmnt = document.getElementById("title");
  elmnt.scrollIntoView();
});


const submit = document.querySelector('.submit');
submit.addEventListener('click', function () {
  alert("Thank You for submitting email!");
});


