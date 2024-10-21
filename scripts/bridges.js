class VideoPlayer {
    constructor(selector) {
        this.$pl = document.querySelector(selector);
        console.log(this.$pl);
        this.$video = this.$pl.querySelector('#video-player');
        console.log(this.$video);
        this.$progress = this.$pl.querySelector('#progress');
        this.$video.ontimeupdate = ()=> this.progressUpdate();
        this.$time = this.$pl.querySelector('#time');
        this.$volume = this.$pl.querySelector('#volume');
        this.$progress.addEventListener('click', (event)=> this.videoRewind());
        this.$pl.querySelector('#play').addEventListener('click', ()=> this.videoPlay());
        this.$pl.querySelector('#pause').addEventListener('click', ()=> this.videoPause());
        this.$pl.querySelector('#stop').addEventListener('click', ()=> this.videoStop());
        this.$pl.querySelector('#speed-up').addEventListener('click', ()=> this.speedUp());
        this.$pl.querySelector('#speed-down').addEventListener('click', ()=> this.speedDown());
        this.$pl.querySelector('#speed-normal').addEventListener('click', ()=> this.speedNormal());
        this.$volume.addEventListener('input', ()=> this.videoVolume());
        
    }
    videoPlay() {
        this.$video.play();
    }
    videoPause() {
        this.$video.pause();
    }
    videoStop() {
        this.$video.pause();
        this.$video.currentTime = 0;
    }
    speedUp() {
        this.$video.playbackRate += 0.25;
    }
    speedDown() {
        this.$video.playbackRate -= 0.25;
    }
    speedNormal() {
        this.$video.playbackRate = 1;
    }
    videoVolume() {
        let v = this.$volume.value;
        this.$video.volume = v / 100;
    }
    
    progressUpdate() {
        this.$progress.value = 100 * this.$video.currentTime / this.$video.duration;
        let minutes = Math.floor(this.$video.currentTime / 60);
        if (minutes < 10){
            minutes = '0' + String(minutes)
        }
        let seconds = Math.floor(this.$video.currentTime % 60);
        if (seconds < 10){
            seconds = '0' + String(seconds)
        }

        this.$time.innerHTML = `${minutes}:${seconds}`
        
    }
    
    videoRewind() {
        let offset = event.offsetX;
        this.$video.currentTime = this.$video.duration * (offset / parseFloat(getComputedStyle(this.$progress).width));
    }


}

const videoPlayer1 = new VideoPlayer('#player-1');

const videoPlayer2 = new VideoPlayer('#player-2');


