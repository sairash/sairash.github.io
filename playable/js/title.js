totalString = 37
currentPostion = 1
placeholderString = '-'
timeout = false

function titleShow(){
    document.title= placeholderString.repeat(currentPostion - 1) + '🐰' + placeholderString.repeat(totalString - currentPostion - 1)
}

function changeCurrentPosition(direction){
    if(!timeout){
        if(direction == 'left'){
            currentPostion -= 1;
        }else{
            currentPostion += 1;
        }
        if(currentPostion <= 0){
            currentPostion = totalString - 1
        }
        if(currentPostion >= totalString){
            currentPostion = 1
        }
        timeout = true
        setTimeout(()=>{
            timeout = false
            titleShow()
        }, 100)
    }

}
