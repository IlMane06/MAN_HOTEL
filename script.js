window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("blackzone").style.height = "5%";
      document.getElementById("logo").style.width = "10%";
      document.getElementById("logo").style.height = "5%";
    } else if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("blackzone").style.height = "10%";
      document.getElementById("logo").style.width = "20%";
      document.getElementById("logo").style.height = "10%";
    } else {
        document.getElementById("blackzone").style.height = "20%";
        document.getElementById("logo").style.width = "30%";
        document.getElementById("logo").style.height = "20%";
    }

    

  }