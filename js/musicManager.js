var audio_playing = false
var music_button = document.getElementById("music_button")
var background_audio_sound = new Audio('./music/winding_down.mp3');
var speaker_audio = new Audio('./music/carrot_talking.mp3');
var walking_audio = new Audio('./music/walking.mp3');



background_audio_sound.loop = true
walking_audio.loop = true



background_audio_sound.volume = 0.4;
walking_audio.volume = 0.6;



function play_audio(){
    audio_playing = !audio_playing
    change_gui()
    background_audio()
}

function change_gui(){
    if(audio_playing){
        music_button.src="./images/music_note.png"
    }else{
        music_button.src="./images/music_note-cross.png"
    }
}

function background_audio(){
    if(audio_playing){
        background_audio_sound.play();
    }else{
        background_audio_sound.pause()
    }
}

function speaking_sound(speaker, action){
    if(audio_playing){
        speaker_audio.src = './music/'+speaker+'_talking.mp3';
        speaker_audio.pause()
        speaker_audio.currentTime = 0;
        if(action == "play"){
            speaker_audio.play()
        }
    }
}

function event_sound(audio_name){
    if(audio_playing){
        var event_audio = new Audio('./music/'+audio_name+'.mp3');
        event_audio.play()
    }
}

function walking_sound(event){
    if(audio_playing){
        if(event == 'play'){
            walking_audio.play()
        }else{
            walking_audio.pause()
            walking_audio.currentTime = 0;
        }
    }
}