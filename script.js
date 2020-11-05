const buttonSecond = document.getElementById("second");
buttonSecond.addEventListener('click', function () {
    var elmnt = document.getElementById("title");
  elmnt.scrollIntoView();
});

const buttonFirst = document.getElementById("first");
buttonFirst.addEventListener('click', function () {
    var elmnt = document.getElementById("title-second");
  elmnt.scrollIntoView();
});

const submitUp = document.querySelector('.up');
submitUp.addEventListener('click', function () {
    alert("Thank You for submitting email!");
  });

  const submitDown = document.querySelector('.down');
submitDown.addEventListener('click', function () {
    alert("Thank You for submitting email!");
  });

