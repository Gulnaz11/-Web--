import scss from "../css/style.scss";
import img1 from "../media/1.jpg";
import img2 from "../media/2.jpg";
import img3 from "../media/3.jpg";
import audio1 from '../media/1.mp3';
import audio2 from '../media/1.mp3';
import video from '../media/1.mp4';

const media = [
    {
        src: img1,
        title: 'Изображение 1',
        type: 'image'
    },
    {
        src: img2,
        title: 'Изображение 2',
        type: 'image'
    },
    {
        src: img3,
        title: 'Изображение 3',
        type: 'image'
    },
    {
        src: audio1,
        title: 'Аудио 1',
        type: 'sound'
    },
    {
        src: audio2,
        title: 'Аудио 2',
        type: 'sound'
    },
    {
        src: video,
        title: 'Видео',
        type: 'video'
    }
]

const block = document.getElementsByClassName('gallery')[0];
media.forEach(el => {
    const div = document.createElement('div');
    let element;
    if (el.type == "image") {
        element = document.createElement('img');
        element.src = el.src;
        div.appendChild(element);
    } else if (el.type == "sound") {
        element = document.createElement('audio');
        element.setAttribute('controls', 'controls');
        let sourse = document.createElement('source');
        sourse.src = el.src;
        sourse.type = "audio/mpeg";
        element.appendChild(sourse);
        div.appendChild(element);
    } else if (el.type == "video") {
        element = document.createElement('video');
        element.setAttribute('controls', 'controls');
        let sourse = document.createElement('source');
        sourse.src = el.src;
        sourse.type = "video/mp4";
        element.appendChild(sourse);
        div.appendChild(element);
    }
    const text = document.createElement('p');
    text.textContent = el.title;
    div.appendChild(text);
    div.className = 'media';
    block.appendChild(div);
})