function doFirst() {
    barSize = 600;
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    bar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');
    stoplay = document.getElementById('stop');
    stoplay.addEventListener('click', stopPlayer, false)
    playButton.addEventListener('click', playOrPause, false);
    bar.addEventListener('click', clickedBar, false);

    e = document.querySelector('.volume-slider-con');
    eInner = document.querySelector('.volume-slider');
    audio = document.getElementById('myMovie');
    drag = false;
    }
    var updateBar = function (x, vol) {
        var volume = e;
        var percentage;
        //if only volume have specificed
        //then direct update volume
        if (vol) {
            percentage = vol * 100;
        } else {
            var position = x - volume.offsetLeft;
            percentage = 100 * position / volume.clientWidth;
        }

        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //update volume bar and video volume
        eInner.style.width = percentage + '%';
        audio.volume = percentage / 100;
    };

    function playOrPause() {
        if (!myMovie.paused && !myMovie.ended) {
            myMovie.pause();
            playButton.innerHTML = 'Play';
            window.clearInterval(updateBar);
        } else {
            myMovie.play();
            playButton.innerHTML = 'Pause';
            updateBar = setInterval(update, 500);
        }
    }

    function stopPlayer() {
        myMovie.pause();
        myMovie.currentTime = 0;
    }

    function update() {
        if (!myMovie.ended) {
            var size = parseInt(myMovie.currentTime * barSize / myMovie.duration)/1.2;
            progressBar.style.width = size + 'px';
        } else {
            progressBar.style.width = '0px';
            playButton.innerHTML = 'Play';
            window.clearInterval(updateBar);
        }
    }

    function clickedBar(e) {
        if (!myMovie.paused && !myMovie.ended) {
            var mouseX = e.pageX - bar.offsetLeft;
            var newtime = mouseX * myMovie.duration / barSize;
            myMovie.currentTime = newtime;
            progressBar.style.width = mouseX + 'px';
        }
    }

    function changeVolume(direction) {
        if (direction === '+') myMovie.volume += myMovie.volume == 1 ? 0 : 0.1;
        else myMovie.volume -= (myMovie.volume == 0 ? 0 : 0.1);
        myMovie.volume = parseFloat(myMovie.volume).toFixed(1);
    }

window.addEventListener( 'load',doFirst, false);