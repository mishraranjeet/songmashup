var myVideo = document.getElementById("video1");
var barSize = 300;
var bar = document.getElementById('defaultBar');
var progressBar = document.getElementById('progressBar');
const ranges = document.getElementById('player__slider');
const vol = document.getElementById('volume__slider');

ranges.addEventListener('change', handlerange ,false);
ranges.addEventListener('mousemove', handlerange,false);
vol.addEventListener('change', handlerange,false);
vol.addEventListener('mousemove', handlerange,false);

bar.addEventListener('click', clickedBar, false);

function play() {
    myVideo.play();
    updateBar = setInterval(update, 500);

  }
  function pause() {
    myVideo.pause();
    window.clearInterval(updateBar);
}
function stopPlayer() {
        myVideo.pause();
        myVideo.currentTime = 0;
    }


function update() {
        if (!myVideo.ended) {
            var size = parseInt(myVideo.currentTime * barSize / myVideo.duration);
            progressBar.style.width = size + 'px';
        } else {
            progressBar.style.width = '0px';
            window.clearInterval(updateBar);
        }
    }

    function clickedBar(e) {
        if (!myVideo.paused && !myVideo.ended) {
            var pct = Math.floor((e.offsetX / bar.offsetWidth) * 100);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",pct);
            var newtime = myVideo.duration * (pct/100);
            myVideo.currentTime = newtime;
            progressBar.style.width = pct + 'px';
        }
    }

  function handlerange() {
      var name = this.name;
      console.log(name,this.value);
      myVideo[name] = this.value
  }


var myVideo2 = document.getElementById("video2");
var bar2 = document.getElementById('defaultBar2');
var progressBar2 = document.getElementById('progressBar2');
const ranges2 = document.getElementById('player__slider2');
const vol2 = document.getElementById('volume__slider2');

ranges2.addEventListener('change', handlerange2 ,false);
ranges2.addEventListener('mousemove', handlerange2,false);
vol2.addEventListener('change', handlerange2,false);
vol2.addEventListener('mousemove', handlerange2,false);

bar2.addEventListener('click', clickedBar2, false);

function play2() {
    myVideo2.play();
    updateBar = setInterval(update2, 500);

  }
  function pause2() {
    myVideo2.pause();
    window.clearInterval(updateBar);
}

function stopPlayer2() {
        myVideo2.pause();
        myVideo2.currentTime = 0;
    }

function update2() {
        if (!myVideo2.ended) {
            var size = parseInt(myVideo2.currentTime * barSize / myVideo2.duration);
            progressBar2.style.width = size + 'px';
        }
        else {
            progressBar2.style.width = '0px';
            window.clearInterval(updateBar2);
        }
    }

function clickedBar2(x) {
        if (!myVideo2.paused && !myVideo2.ended) {
            console.log(x);
            var pct = Math.floor((x.offsetX / bar2.offsetWidth) * 100);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",pct);
            var newtime = myVideo2.duration * (pct/100);
            myVideo2.currentTime = newtime;
            progressBar2.style.width = pct + 'px';
        }
    }
function handlerange2() {
      var name = this.name;
      console.log(name,this.value);
      myVideo2[name] = this.value
  }