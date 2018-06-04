var myVar = setInterval(myTimer, 1000);
      
      function myTimer() {
          let d = new Date();
         col =  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
          col.style.color="#FF69B4";
      }