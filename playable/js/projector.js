projectorEnabled = false;

projectorContainerDom = document.getElementById("projectorContainer")
projectorImageDom = document.getElementById("projectorImage")
projectorTitleDom = document.getElementById("projectorTitle")
projectorWorkDom = document.getElementById("projectorWork")
projectorInfoDom = document.getElementById("projectorInfo")
projectorLinkDom = document.getElementById("projectorLink")
projectorSelected = 0



function enableProjector(){
    projectorEnabled = true;
    projectorDomToggle();
}

function disableProjector(){
    projectorEnabled = false;
    projectorDomToggle();
}

function projectorDomToggle(){
    if(projectorEnabled){
        projectorContainerDom.style.display = "block";
    }else{
        projectorContainerDom.style.display = "none";
    }
    
}

function heldLeftOrRight(direction){
    if(direction == 'left'){
        if(projectorSelected <= 0){
            projectorSelected = projectorData.length - 1
        }else{
            projectorSelected -=1;
        }
    }else{
        if(projectorSelected >= projectorData.length - 1){
            console.log('here')
            projectorSelected = 0
        }else{
            projectorSelected +=1;
        }
    }
    changeProjectorData();
}

function changeProjectorData(){
    projectorImageDom.src = projectorData[projectorSelected].image
    projectorTitleDom.innerHTML = projectorData[projectorSelected].title
    projectorWorkDom.innerHTML = projectorData[projectorSelected].work
    projectorLinkDom.innerHTML = projectorData[projectorSelected].link
    projectorLinkDom.href = projectorData[projectorSelected].link
    projectorInfoDom.innerHTML = projectorData[projectorSelected].description
}

changeProjectorData()