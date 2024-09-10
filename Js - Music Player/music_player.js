import { music_name, music_origin, msc_name, msc_org } from "./funcoes.js"

let audio_atual = 1
let cover_atual = 1
let taTocando = 0
const num_audio = 3
const num_cover = 3
const img_cover = document.getElementById('imgID')
const PP = document.getElementById('PlayPause')
const MA = document.getElementById('musicAudio')
const passar = document.getElementById('Next')
const voltar = document.getElementById('Back')

const progressBar = document.getElementById("myProgress");
const ponto = document.querySelector('.ponto')
/*
let root = document.querySelector(':root')
*/


// play ou pause
function play(){
    MA.play()
    taTocando = 1
    PP.src = 'imgs-msc_player/pause-button.png'
    MA.volume = 0.5
    /*PP.innerText = 'Pausar'*/
}
function pause(){
    MA.pause()
    taTocando = 0
    PP.src = 'imgs-msc_player/play-button.png'
    MA.volume = 0.5
    /*PP.innerText = 'Play'*/
}

function PlayOrPause(){
    if (taTocando === 0){
        play()
    }
    else {
        pause()
    }
}
PP.addEventListener('click', PlayOrPause)


//função de passar o audio
passar.addEventListener('click', () => {
    //Trocar o audio
    if (audio_atual === num_audio){
        audio_atual = 1
    }
    else {
        audio_atual = audio_atual + 1
    }
    MA.src = "Audio " + audio_atual + ".mp3"
    MA.play()
    taTocando = 1

    //Trocar a capa da música
    if (cover_atual === num_cover){
        cover_atual = 1
    }
    else {
        cover_atual = cover_atual + 1
    }
    document.body.style.backgroundImage = 'var(--bg'+cover_atual+')'
    img_cover.src = 'imgs-msc_player/Small_Cover '+cover_atual+'.jpg'
    // Troca a origem e o nome da música
    music_name.innerText = msc_name[cover_atual]
    music_origin.innerText = msc_org[cover_atual]
    PP.src = 'imgs-msc_player/pause-button.png'
})
//função de voltar o audio
function voltarFaixa (){
    // Troca o audio
    if (audio_atual === 1){
        audio_atual = num_audio 
    }else {
        audio_atual = audio_atual - 1
    }
    MA.src = "Audio " + audio_atual + ".mp3"
    MA.play()
    taTocando = 1

    // Troca a capa da música
    if (cover_atual === 1){
        cover_atual = num_cover
    }
    else {
        cover_atual = cover_atual - 1
    }
    document.body.style.backgroundImage = 'var(--bg'+cover_atual+')'
    img_cover.src = 'imgs-msc_player/Small_Cover '+cover_atual+'.jpg'
    // Troca a origem e o nome da música
    music_name.innerText = msc_name[cover_atual]
    music_origin.innerText = msc_org[cover_atual]
    PP.src = 'imgs-msc_player/pause-button.png'
}
voltar.addEventListener('click',voltarFaixa)


//função de atualizar o ponto junto com o valor do progresso
MA.addEventListener('timeupdate', attBar)
//sem esse nao funfa
function attBar(){
    let pg = document.querySelector('progress')
    pg.value = Math.floor((MA.currentTime/MA.duration)*100)
    /*ponto.style.right = prog.value+'px'*/
    if (pg.value < 15) {
    ponto.style.marginLeft = ((pg.value-0.5)*1.8) +'px'
}
else if (pg.value <= 40){
    ponto.style.marginLeft = ((pg.value-3)*2.25) +'px'
}
else if (pg.value <= 80){
    ponto.style.marginLeft = ((pg.value-8.5)*2.68) +'px'
}
else if (pg.value > 80){
    ponto.style.marginLeft = ((pg.value-10)*2.76) +'px'
}
    //Atualização de minutagem
    let campoMinutos = Math.floor(MA.currentTime/60)
    let campoSegundos = Math.floor(MA.currentTime%60)
    if (campoSegundos < 10){
        campoSegundos = '0'+campoSegundos
    }
    let inicio_audio = document.querySelector('.inicio_audio')
    inicio_audio.innerText = campoMinutos +':'+ campoSegundos
    
    let campoMin = Math.floor(MA.duration/60)
    let campoSeg = Math.floor(MA.duration%60)
    if (campoSeg < 10){
        campoSeg = '0'+campoSeg
    }
    let fim_audio = document.querySelector('.fim_audio')
    fim_audio.innerText = campoMin +':'+ campoSeg
}



const progVol = document.getElementById('prog_vol')
let img_vol = document.getElementById('img_vol')

//barras para clicar e pular minutagem
progressBar.addEventListener('click', (ev)=>{
    let newTime = (ev.offsetX / progressBar.offsetWidth) * MA.duration
    MA.currentTime = newTime
})
//barra para alterar o volume
progVol.addEventListener('click', (ev)=>{
    let newVol = (ev.offsetX / progVol.offsetWidth) * 1
    progVol.value = newVol
    MA.volume = progVol.value
    if (progVol.value >= 0.7) {
        img_vol.src = "imgs-msc_player/max-volume.png"
    }
    else if (progVol.value >= 0.4 && progVol.value < 0.7) {
        img_vol.src = "imgs-msc_player/medium-volume.png"
    }
    else if (progVol.value >=0.1) {
        img_vol.src = "imgs-msc_player/low-volume.png"
    }
})


import {vol, vol2} from "./funcoes.js"
vol.addEventListener('mouseenter', () => {
    vol2.setAttribute('id','vol_on')
    /*vol2.style.display = 'block'
    vol2.style.transition = '0.5s'*/
    
    vol.addEventListener('mouseleave', () => {
        vol2.setAttribute('id','vol_off')
    })
    
})

vol2.addEventListener('mouseenter', () => {
    vol2.setAttribute('id','vol_on')
})
vol2.addEventListener('mouseleave', () => {
    vol2.setAttribute('id','vol_off')
})


//esse parece não fazer nada
/*progressBar.addEventListener("input", () => {
    const value = progressBar.value;
    const containerWidth = progressBar.offsetWidth;
    const pontoPosition = (value * 3) * containerWidth;
});*/