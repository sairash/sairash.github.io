projectorEnabled = false;

projectorContainerDom = document.getElementById("projectorContainer")
projectorImageDom = document.getElementById("projectorImage")
projectorTitleDom = document.getElementById("projectorTitle")
projectorWorkDom = document.getElementById("projectorWork")
projectorInfoDom = document.getElementById("projectorInfo")
projectorLinkDom = document.getElementById("projectorLink")
projectorSelected = 0

projectorData = []

async function fetchProjectData() {
    try {
        const response = await fetch('/playable/json/projects.json');

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        return (await response.json()).filter((ele)=>{return ele.type != "job"});
         

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}




function enableProjector() {
    projectorEnabled = true;
    projectorDomToggle();
}

function disableProjector() {
    projectorEnabled = false;
    projectorDomToggle();
}

function projectorDomToggle() {
    if (projectorEnabled) {
        projectorContainerDom.style.display = "block";
    } else {
        projectorContainerDom.style.display = "none";
    }

}

function heldLeftOrRight(direction) {
    if (direction == 'left') {
        if (projectorSelected <= 0) {
            projectorSelected = projectorData.length - 1
        } else {
            projectorSelected -= 1;
        }
    } else {
        if (projectorSelected >= projectorData.length - 1) {
            projectorSelected = 0
        } else {
            projectorSelected += 1;
        }
    }
    
    changeProjectorData();
}

async function changeProjectorData() {
    if(projectorData.length == 0) {
        projectorData = await fetchProjectData();
    }
    projectorImageDom.src = projectorData[projectorSelected].image
    projectorTitleDom.innerHTML = projectorData[projectorSelected].title
    projectorWorkDom.innerHTML = projectorData[projectorSelected].work
    projectorLinkDom.innerHTML = projectorData[projectorSelected].link
    projectorLinkDom.href = projectorData[projectorSelected].link
    projectorInfoDom.innerHTML = projectorData[projectorSelected].description
}

changeProjectorData()