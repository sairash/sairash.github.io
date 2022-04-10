var environment = document.querySelector("#environment");
var environmentChildCollider = environment.getElementsByTagName('div');
var environmentChildObject = environment.getElementsByTagName('p');
var topCollider = document.querySelector("#playerColliderTop");
var bottomCollider = document.querySelector("#playerColliderBottom");
var leftCollider = document.querySelector("#playerColliderLeft");
var rightCollider = document.querySelector("#playerColliderRight");
var colliderRadar = document.querySelector("#playerColliderRadar");
var notify = document.querySelector("#notify");
var onInteractableObject = false;
var previousInteractableObjectId = '';
var changeAbleImageChanged= false;
var onNpc = false;
var onDoor = false;
var positionToChangePlayer = {x:0, y:0};
var onStorage = false;

function collisionChecker(direction) {
    function overlaps(a, b) {
        const rect1 = a.getBoundingClientRect();
        const rect2 = b.getBoundingClientRect();
        const isInHoriztonalBounds =
        rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
        const isInVerticalBounds =
        rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
        const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
        return isOverlapping;
    }


    for( i=0; i< environmentChildCollider.length; i++ )
    {
        if(overlaps(colliderRadar, environmentChildCollider[i])){
            if(direction == 'up'){
                if(overlaps(topCollider, environmentChildCollider[i]))
                    return true;
            }else if(direction == 'down'){
                if(overlaps(bottomCollider, environmentChildCollider[i]))
                    return true;
            }else if(direction == 'left'){
                if(overlaps(leftCollider, environmentChildCollider[i]))
                    return true;
            }else if(direction == 'right'){
                if(overlaps(rightCollider, environmentChildCollider[i]))
                    return true;
            }
        }else{
            returnValue = false;
        }
    }
    
    function interactable_logic(type, event) {
       if(event == 'Enter'){
            if(type == 'changeAble'){
                if(!changeAbleImageChanged){
                    document.getElementById(previousInteractableObjectId+'_image').src = document.getElementById(previousInteractableObjectId+'_image').src.replace('_close', '_open');
                    changeAbleImageChanged = true;
                    onDoor = true;
                    positionToChangePlayer.x = document.getElementById(previousInteractableObjectId).getAttribute('position').split(",")[0];
                    positionToChangePlayer.y = document.getElementById(previousInteractableObjectId).getAttribute('position').split(",")[1];
                    event_sound("door_open")
                }
            }
            if(type == 'npc'){
                onNpc = true;
            }
            if(type == 'storage'){
                onStorage = true;
            }
       }else{
            if(type == 'changeAble'){
                if(changeAbleImageChanged){
                    document.getElementById(previousInteractableObjectId+'_image').src = document.getElementById(previousInteractableObjectId+'_image').src.replace('_open', '_close');
                    changeAbleImageChanged = false;
                    onDoor = false;
                    event_sound("door_close")
                }
            }
            if(type == 'npc'){
                onNpc = false;
            }
            if(type == 'storage'){
                onStorage = false;
            }
       }
    }

    for( i=0; i< environmentChildObject.length; i++ )
    {
        if(!onInteractableObject){
            if(overlaps(colliderRadar, environmentChildObject[i])){
                console.log('here')
                previousInteractableObjectId = environmentChildObject[i].id;
                onInteractableObject = true;
                interactable_logic(environmentChildObject[i].getAttribute('type'), 'Enter');
                notify.classList.remove("invisible");
                notify.classList.add("visible");
            }
        }else{
            if(environmentChildObject[i].id == previousInteractableObjectId){
                if(!overlaps(colliderRadar, environmentChildObject[i])){
                    interactable_logic(environmentChildObject[i].getAttribute('type'), 'Exit');
                    previousInteractableObjectId = '';
                    onInteractableObject = false;
                    notify.classList.remove("visible");
                    notify.classList.add("invisible");
                 }
            }
        }
    }

    returnValue = false;
}