var myVideo = document.getElementById("video1");
var myVideo2 = document.getElementById("video2");
const volfading = document.getElementById('volume__fade');

volfading.addEventListener('change', volfade ,false);
volfading.addEventListener('mousemove', volfade,false);

  function volfade() {
      var name = this.name;
      console.log(name,this.value);
      myVideo[name] = 1-this.value
      myVideo2[name] = this.value

  }
