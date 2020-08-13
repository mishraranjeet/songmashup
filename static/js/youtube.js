var maxResults =1;
var barSize = 300;
var player1;
var bar = document.getElementById('defaultBar');
var progressBar = document.getElementById('progressBar');
bar.addEventListener('click', clickedBar, false);

const ranges = document.getElementById('player__slider');
ranges.addEventListener('change', handlerangespeed ,false);

const vol = document.getElementById('volume__slider');
vol.addEventListener('change', handlerangevol,false);
vol.addEventListener('mousemove', handlerangevol,false);


function youtubeSearch(event) {
    event.preventDefault();
    console.log(event.target['search'].value);
        var searchstring=event.target['search'].value
        var settings = {
        "url": "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDnne9Ia-Sji_lSX-wR5v10N1X5S6jCKLE" +
            "&type=video" +
            "&q="+searchstring+
            "&part=snippet" +
            "&maxResults="+ maxResults ,
            "method": "GET",
        };
        $.ajax(settings).done(function (response) {
            console.log(response.items);
            response.items.forEach(item=>{
                player1 = new YT.Player('player1', {
                        width: 130,
                        height: 100,
                        videoId:item.id.videoId,
                        playerVars: {
                            color: 'white',
                            controls:0,
                        },
                    });
            })
        });
    }

function ytplay(event) {
    event.preventDefault();
    player1.playVideo();
    updateBar = setInterval(update, 500);

  }

function ytplause(event) {
    event.preventDefault();
    player1.pauseVideo();
    window.clearInterval(updateBar);

  }
function ytstop(event) {
    event.preventDefault();
     player1.stopVideo();

  }
function update() {
        if (!player1.ended) {
            var size = parseInt(player1.getCurrentTime() * barSize / player1.getDuration());
            progressBar.style.width = size + 'px';
        } else {
            progressBar.style.width = '0px';
            window.clearInterval(updateBar);
        }
    }

function clickedBar(e) {
            e.preventDefault();
        if (!player1.paused && !player1.ended) {
            var pct = Math.floor((e.offsetX / bar.offsetWidth) * 100);
            var newtime = player1.getDuration() * (pct/100);
            player1.seekTo(newtime);
            progressBar.style.width = pct + 'px';
        }
    }

function handlerangevol() {
      player1.setVolume(this.value)
  }

function handlerangespeed() {
    console.log(this.value)
    player1.setPlaybackRate(Number(this.value))
  }

var player2;
var bar2 = document.getElementById('defaultBar2');
var progressBar2 = document.getElementById('progressBar2');
bar2.addEventListener('click', clickedBar2, false);

const ranges2 = document.getElementById('player__slider2');
ranges2.addEventListener('change', handlerangespeed2 ,false);

const vol2 = document.getElementById('volume__slider2');
vol2.addEventListener('change', handlerangevol2,false);
vol2.addEventListener('mousemove', handlerangevol2,false);

function youtubeSearch2(event) {
        event.preventDefault();
    console.log(event.target['search2'].value);
        var searchstring=event.target['search2'].value
        var settings = {
        "url": "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDnne9Ia-Sji_lSX-wR5v10N1X5S6jCKLE" +
            "&type=video" +
            "&q="+searchstring+
            "&part=snippet" +
            "&maxResults="+ maxResults ,
            "method": "GET",
        };
        $.ajax(settings).done(function (response) {
            console.log(response.items);
            response.items.forEach(item=>{
                player2 = new YT.Player('player2', {
                        width: 130,
                        height: 100,
                        videoId:item.id.videoId,
                        playerVars: {
                            color: 'white',
                            controls:0,
                        },
                    });
            })
        });
    }

function ytplay2(event) {
    event.preventDefault();
    player2.playVideo();
    updateBar = setInterval(update2, 500);

  }

function ytplause2(event) {
    event.preventDefault();
    player2.pauseVideo();
    window.clearInterval(updateBar);

  }
function ytstop2(event) {
    event.preventDefault();
     player2.stopVideo();

  }
function update2() {
        if (!player2.ended) {
            var size = parseInt(player2.getCurrentTime() * barSize / player2.getDuration());
            progressBar2.style.width = size + 'px';
        } else {
            progressBar2.style.width = '0px';
            window.clearInterval(updateBar);
        }
    }

    function clickedBar2(e) {
        if (!player2.paused && !player2.ended) {
            var pct = Math.floor((e.offsetX / bar2.offsetWidth) * 100);
            var newtime = player2.getDuration() * (pct/100);
            player2.seekTo(newtime);
            progressBar2.style.width = pct + 'px';
        }
    }

function handlerangevol2() {
      player2.setVolume(this.value)
  }

function handlerangespeed2() {
    console.log(this.value)
    player2.setPlaybackRate(Number(this.value))
  }

const ytvolfading = document.getElementById('volume__fade');
ytvolfading.addEventListener('change', ytvolfade ,false);
ytvolfading.addEventListener('mousemove', ytvolfade,false);

  function ytvolfade() {
      console.log(100-this.value,Number(this.value));
      player1.setVolume(100-this.value)
      player2.setVolume(this.value)

  }