window.onscroll = function() {smallFunction(), hideArrowFunction(), blurFunction() };

function smallFunction() {

    if (document.body.scrollTop > 700) {
      document.getElementById("blackzone").style.height = "5%";
      document.getElementById("blackzone").style.opacity = "1";
      document.getElementById("logo").style.width = "10%";
      document.getElementById("logo").style.height = "5%";
      document.getElementById("home").style.height = "5%";
      document.getElementById("home").style.width = "1.5%";
    } else {
      document.getElementById("blackzone").style.height = "20%";
      document.getElementById("blackzone").style.opacity = "0";
      document.getElementById("logo").style.width = "30%";
      document.getElementById("logo").style.height = "20%";
      document.getElementById("home").style.height = "20%";
      document.getElementById("home").style.width = "3%";
    }

}

function hideArrowFunction() {

  if (document.body.scrollTop < 3000 && document.body.scrollTop >=2600 ) {
     document.getElementById("arrow").style.display = "none";
  } else {
    document.getElementById("arrow").style.display = "block";
  }

}

window.onclick = function() {downFunction()};

function downFunction() {

  if (document.body.scrollTop < 900 && document.body.scrollTop >= 0) {
    window.scrollTo(0,900);
  } else if (document.body.scrollTop < 1800 && document.body.scrollTop >= 900) {
    window.scrollTo(0,1800);
  } else if (document.body.scrollTop < 2700 && document.body.scrollTop >= 1800) {
    window.scrollTo(0,2700);
  }

}

 