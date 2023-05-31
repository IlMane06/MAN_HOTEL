window.onscroll = function() {smallFunction()};

function smallFunction() {

    if (document.body.scrollTop > 810 || document.documentElement.scrollTop > 810) {
      document.getElementById("blackzone").style.height = "5%";
      document.getElementById("logo").style.width = "10%";
      document.getElementById("logo").style.height = "5%";
      document.getElementById("home").style.height = "5%";
      document.getElementById("home").style.width = "1.5%";
    } else if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
      document.getElementById("blackzone").style.height = "10%";
      document.getElementById("logo").style.width = "20%";
      document.getElementById("logo").style.height = "10%";
      document.getElementById("home").style.height = "10%";
      document.getElementById("home").style.width = "2%";
    } else {
      document.getElementById("blackzone").style.height = "20%";
      document.getElementById("logo").style.width = "30%";
      document.getElementById("logo").style.height = "20%";
      document.getElementById("home").style.height = "20%";
      document.getElementById("home").style.width = "3%";
    }

  }

  
