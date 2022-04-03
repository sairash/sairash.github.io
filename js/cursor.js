
let mouseCursor = document.querySelector("#cursor");
let mouseCursorImage = document.querySelector("#cursorImage");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}

window.addEventListener("mousedown",()=>{
    mouseCursorImage.src= "images/cursor_click.png";
});

window.addEventListener("mouseup",()=>{
    mouseCursorImage.src= "images/cursor.png";
});

document.addEventListener("mouseleave", function(event){

    if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
    {
    mouseCursor.style.display= "none";
}
});

document.addEventListener("mouseenter", function(event){

    if(event.clientY >= 0 || event.clientX >= 0 || (event.clientX <= window.innerWidth || event.clientY <= window.innerHeight))
    {
    mouseCursor.style.display= "block";
    }
});