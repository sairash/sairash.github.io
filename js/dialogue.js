var backpack = [];
var currentText = '';
var speaking = true;
var lastTalkedCharacter = 'carrot';
var nextDialogue = false;
var postSpeaking = false;
var questActive= false;
var speakerDialogueHtml = document.getElementById('speakerDialogue');
var uiDialogueContainer = document.getElementById('uiDialogueContainer');

var o = 0;


var dialogue = {
    carrot:{
        img:'images/characters/carrot_head.png',
        speech:['Hello!! Welcome..', 'I am Carrot or the main character of this game!', "Do You See the music button on top? (Click that right now)", "This game happens to be Sairash's Portfolio", "Oh and Did you know everything in this site is made using vanilla js with everything made by sairash except music.", 'Now, Go and Talk to the pigman..'],
        intext: 0,
        quest:{
          
        },
        finished: false,
        placeholder: '',

    },
    bacon:{
        img:'images/characters/bacon_head.png',
        speech:['Hii Oink Oink!', 'I am bacon.. But You can call me yours ;)', 'I have a quest for you!', 'Go and get me the key from the Chest that is in Shroom Land!', '...', 'Oh Wow you did bring it.. Thank you!'],
        intext: 0,
        quest:{
            4: {
                locked: true,
                key: 'key_chest_1',
            },
        },
        finished: false,
        placeholder: '...!',

    },
}


function typing() {
    if(o < currentText.length){
        speakerDialogueHtml.innerHTML += currentText.charAt(o);
        o++;
        setTimeout(typing, 50);
    }
}


function dialogueSystem() {
    if(questActive){ // quest active true
        if(backpack.includes(dialogue[lastTalkedCharacter].quest[dialogue[lastTalkedCharacter].intext].key)){ // if the key is already found.
            dialogue[lastTalkedCharacter].quest[dialogue[lastTalkedCharacter].intext].locked = false; // locked will be false.
            questActive = false; // quest active is false..
            console.log( 'Quest complete and add a new one' );
        }else{
            speaking = false;
            postSpeaking = true;
        }
    }else{
        if(speaking){
                // console.log(questActive)
            if(nextDialogue){
                if(!questActive){
                    if(dialogue[lastTalkedCharacter].finished == true){
                        speaking = false;
                    }
                    if(dialogue[lastTalkedCharacter].intext < dialogue[lastTalkedCharacter].speech.length-1){
                        dialogue[lastTalkedCharacter].intext +=1;
                        nextDialogue = false;
                    }else{
                        dialogue[lastTalkedCharacter].finished = true;
                    }
                }else{
                    speaking = false;
                    console.log("Quest is active")
                    postSpeaking = true;
                }
                speaking_sound(lastTalkedCharacter, 'play')
            }
            if(!dialogue[lastTalkedCharacter].finished){
                if(dialogue[lastTalkedCharacter].quest[dialogue[lastTalkedCharacter].intext] != undefined){
                    if(currentText != dialogue[lastTalkedCharacter].speech[dialogue[lastTalkedCharacter].intext]){
                        currentText = dialogue[lastTalkedCharacter].speech[dialogue[lastTalkedCharacter].intext];
                        speakerDialogueHtml.innerHTML = '';
                        o = 0;
                        typing();
                    }
                    if(dialogue[lastTalkedCharacter].quest[dialogue[lastTalkedCharacter].intext].locked){
                        console.log("Quest Active: True");
                        questActive = true;
                    }else{
                        questActive = false;
                    }
                }else{
                    if(currentText != dialogue[lastTalkedCharacter].speech[dialogue[lastTalkedCharacter].intext]){
                        currentText = dialogue[lastTalkedCharacter].speech[dialogue[lastTalkedCharacter].intext];
                        speakerDialogueHtml.innerHTML = '';
                        o = 0;
                        typing();
                    }
                }

            }else{
                currentText = dialogue[lastTalkedCharacter].placeholder;
                // speakerDialogueHtml.innerHTML = dialogue[lastTalkedCharacter].placeholder;
                speakerDialogueHtml.innerHTML = '';
                o = 0;
                typing();
                speaking = false;
            }
            document.getElementById('speakerIamge').src = dialogue[lastTalkedCharacter].img;
            document.getElementById('speakerName').innerHTML = lastTalkedCharacter+" <small style='color:red;'><i> [Press Space] </i></small>";
        }else{
            if(!postSpeaking){
                uiDialogueContainer.style.display = 'none';
                console.log('close')
                speaking_sound(lastTalkedCharacter, 'pause')
        postSpeaking = true;
            }
        }
    }
    if(postSpeaking){
        uiDialogueContainer.style.display = 'none';
    }else{
        uiDialogueContainer.style.display = 'flex';
    }
}