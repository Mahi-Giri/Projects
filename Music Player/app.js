const songs = [
    {
        id: "1",
        songName: `Har dil jo Pyar karega<br>
        <div class="subtitle">Alka Yangik</div>`,
        poster: `img/1.jpg`
    },
    {
        id: "2",
        songName: `Aaj Kehna Jaroori Hai<br>
        <div class="subtitle">Alka Yangik</div>`,
        poster: `img/2.jpg`
    },
    {
        id: "3",
        songName: `Aye Mere Humsafar<br>
        <div class="subtitle">Alka Yangik</div>`,
        poster: `img/3.jpg`
    },
    {
        id: "4",
        songName: `Abhi Mujh Mein Kahin<br>
        <div class="subtitle">Ajay Atul</div>`,
        poster: `img/4.jpg`
    },
    {
        id: "5",
        songName: `Yad Lagla<br>
        <div class="subtitle">Ajay Atul</div>`,
        poster: `img/5.jpg`
    },
    {
        id: "6",
        songName: `The Spectre<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: `img/6.jpg`
    },
    {
        id: "7",
        songName: `Routine<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: `img/7.jpg`
    },
    {
        id: "8",
        songName: `Dil Darbadar<br>
        <div class="subtitle">Ankit Tiwari</div>`,
        poster: `img/8.jpg`
    },
    {
        id: "9",
        songName: `Tu Jo Hain<br>
        <div class="subtitle">Ankit Tiwari</div>`,
        poster: `img/9.jpg`
    },
    {
        id: "10",
        songName: `FRIENDS<br>
        <div class="subtitle">Anna Marie</div>`,
        poster: `img/10.jpg`
    },
    {
        id: "11",
        songName: `2002<br>
        <div class="subtitle">Anna Marie</div>`,
        poster: `img/11.jpg`
    },
    {
        id: "12",
        songName: `Satranga<br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: `img/12.jpg`
    },
    {
        id: "13",
        songName: `Phir Kabhi<br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: `img/13.jpg`
    },
    {
        id: "14",
        songName: `Hirwa Nisarga<br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster: `img/14.jpg`
    },
    {
        id: "15",
        songName: `Main Hoon Na<br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster: `img/15.jpg`
    },
    {
        id: "16",
        songName: `Dil Diyan Gallan<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: `img/16.jpg`
    },
    {
        id: "17",
        songName: `Mere Humsafar<br>
        <div class="subtitle">Tulsi Kumar</div>`,
        poster: `img/17.jpg`
    },
    {
        id: "18",
        songName: `Mainu ishq ka lagya rog<br>
        <div class="subtitle">Tulsi Kumar</div>`,
        poster: `img/18.jpg`
    },
    {
        id: "19",
        songName: `O Re Piya<br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: `img/19.jpg`
    },
    {
        id: "20",
        songName: `Tum Jo Aaye<br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: `img/20.jpg`
    },
    {
        id: "21",
        songName: `Guli Mata<br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: `img/21.jpg`
    },
    {
        id: "22",
        songName: `Deewani Mastani<br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: `img/22.jpg`
    },
];

const pop_song_left = document.getElementById('pop_song_left');
const pop_song_right = document.getElementById('pop_song_right');
const pop_song = document.getElementsByClassName('pop_song')[0];
const pop_art_left = document.getElementById('pop_art_left');
const pop_art_right = document.getElementById('pop_art_right');
const item = document.getElementsByClassName('item')[0];

// Music ScrollBar
pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});
pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 350;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 350;
});

const music = new Audio('audio/10.mp3');


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

const masterPlay = document.getElementById('masterPlay');
const wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
    }
});

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
        e.classList.add('bi-play-circle-fill');
        e.classList.remove('bi-pause-circle-fill');
    });
};

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
        e.style.background = 'rgba(105, 105, 105, .0)';
    });
};

const btn_playlist = document.querySelectorAll('#btn_playlist');
btn_playlist.forEach(element => {
    element.addEventListener('click', () => {
        btn_playlist.forEach(el => {
            el.classList.remove('active');
        });

        element.classList.add('active');
    });
});

// search Data
const search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    const card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML += `
    <img src="${poster}" alt="">
        <div class="content">
            ${songName}
        </div>
    </div>`;

    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
        let item = items[i].getElementsByClassName('content')[0];
        let text_value = item.textContent || item.innerText;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = 'flex';
        } else {
            items[i].style.display = 'none';
        }

        if (input.value == 0) {
            search_result.style.display = 'none';
        } else {
            search_result.style.display = '';
        }
    }
});

// search Data

let index = 0;
const poster_master_play = document.getElementById('poster_master_play');
const title = document.getElementById('title');
const download_music = document.getElementById('download_music');
Array.from(document.getElementsByClassName('playListPlay')).forEach(element => {
    element.addEventListener('click', (el) => {
        index = el.target.id;

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');

        download_music.href = `audio/${index}.mp3`;

        let songTitle = songs.filter((el) => {
            return el.id == index;
        });

        songTitle.forEach(song => {
            let { songName } = song;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName)
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.backgroundColor = 'rgb(105, 105, 105, .1)'
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
    });
});

const currentstart = document.getElementById('currentstart');
const currentEnd = document.getElementById('currentEnd');
const seek = document.getElementById('seek');
const bar2 = document.getElementById('bar2');
const dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_Curr = music.currentTime;
    let music_Dur = music.duration;
    let min1 = Math.floor(music_Dur / 60);
    let sec1 = Math.floor(music_Dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_Curr / 60);
    let sec2 = Math.floor(music_Curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentstart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_Curr / music_Dur) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

const vol_icon = document.getElementById('vol_icon');
const vol = document.getElementById('vol');
const vol_bar = document.getElementsByClassName('vol_bar')[0];
const vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0 && vol.value < 60) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    if (vol.value > 60) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

const back = document.getElementById('back');
const next = document.getElementById('next');

back.addEventListener('click', (el) => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(song => {
        let { songName } = song;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.backgroundColor = 'rgb(105, 105, 105, .1)'
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});
next.addEventListener('click', (el) => {
    index++;

    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    let songTitle = songs.filter((song) => {
        return song.id == index;
    });

    songTitle.forEach(song => {
        let { songName } = song;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.backgroundColor = 'rgb(105, 105, 105, .1)'
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});

const shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    console.log(a);
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const nextMusic = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    download_music.href = `audio/${index}.mp3`;

    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(song => {
        let { songName } = song;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.backgroundColor = 'rgb(105, 105, 105, .1)'
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
};

const repeatMusic = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    download_music.href = `audio/${index}.mp3`;

    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(song => {
        let { songName } = song;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.backgroundColor = 'rgb(105, 105, 105, .1)'
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
};

const randomMusic = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor(Math.random() * songs.length) + 1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    download_music.href = `audio/${index}.mp3`;

    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(song => {
        let { songName } = song;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.backgroundColor = 'rgb(105, 105, 105, .1)'
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

music.addEventListener('ended', () => {
    let mode = shuffle.innerHTML;

    switch (mode) {
        case 'repeat':
            repeatMusic();
            break;
        case 'next':
            nextMusic();
            break;
        case 'random':
            randomMusic();
            break;
    }
});
