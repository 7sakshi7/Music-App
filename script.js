const title = document.querySelector('#title');
const artist = document.querySelector('#artist');
// image
const cover = document.getElementById('cover');

// time controls
const done = document.getElementById('done');
const totaltime = document.getElementById('totaltime');

// progress container
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');

// controls
const play = document.querySelector('#play');
const play_icon = document.querySelector('#play i');
const pause = document.querySelector('#pause');
const pause_icon = document.querySelector('#pause i');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let set_id;

const songs = [
    {
        title: 'Thousand Years',
        artist: 'Cristina Perri',
    },
    {
        title: 'Blank Space',
        artist: 'Taylor Swift',
    },
    {
        title: 'Believer',
        artist: 'Imagine Dragon',
    },
    {
        title: 'Love me like You Do',
        artist: 'Elie Goulding',
    },
    {
        title: 'On My Way',
        artist: 'Alan Walker',
    },

];

let songControl = 0;

function loadsongs() {
    title.innerText = songs[songControl].title;
    artist.innerText = songs[songControl].artist;
    cover.src = `images/img${songControl + 1}.jpg`;
    audio.src = `music/song${songControl + 1}.mp3`;
    audio.addEventListener('loadedmetadata', () => {
        let str = showTime(audio.duration);
        totaltime.innerText = str;
    });
    done.innerText = "00:00";
    progress.style.max
}
loadsongs();
function playsong() {
    audio.play();
}
function showTime(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = String((duration / 60) - minutes);
    let check = seconds.substr(2, 2);
    if(check[0]>6 ||(check[0]==6 && check[1]>0))
    {
        minutes++;
        check = check-60;
        
        if(String(check).length==1)
        check = "0"+check;
    }
    let str = "0"+minutes + ":" + check;
    return str;
}
// eventListeners
audio.addEventListener('ended',()=>{
    songControl = (songControl + 1) % 5;
    loadsongs();
    playsong();
    clearInterval(set_id);
    play_icon.style.display = "none";
    pause_icon.style.display = "block";
});
audio.addEventListener('playing', () => {
    let str = showTime(audio.duration);
    let time = done.innerText;
    let min = time.substr(0, 2);
    let sec = time.substr(3, 2);

   set_id =  setInterval(() => {
        sec = String(Number(sec) + 1);
        if (sec.length == 1)
            sec = "0" + sec;

        else if (sec == "60"){
            min = String(Number(min) + 1);
            sec="00";
        }
        if (min.length == 1)
            min = "0" + min;
        
        let val = (Number(min+sec)/(Number(str.substr(0,2)+str.substr(3,2))))*100;
         progress.value = (val);
        done.innerText = min + ":" + sec;
    }, 1000);

});
play.addEventListener('click', () => {
    playsong();
    play_icon.style.display = "none";
    pause_icon.style.display = "block";
});
pause.addEventListener('click', () => {
    play_icon.style.display = "block";
    pause_icon.style.display = "none";
    audio.pause();
});
next.addEventListener('click', () => {
    songControl = (songControl + 1) % 5;
    loadsongs();
    playsong();
    clearInterval(set_id);
    play_icon.style.display = "none";
    pause_icon.style.display = "block";

});
prev.addEventListener('click', () => {
    songControl = (songControl - 1 + 5) % 5;
    loadsongs();
    playsong();
    clearInterval(set_id);
    play_icon.style.display = "none";
    pause_icon.style.display = "block";

});
