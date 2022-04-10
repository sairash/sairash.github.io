document.addEventListener('DOMContentLoaded', () => {
    function getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }


    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.main_title', 4, {
        x:  -800,
        opacity: 0,
        ease: Power3.easeInOut
    })
    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: 500,
        triggerHook: 0,
        // offset: '300'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);

    let timeline2= new TimelineMax();
    timeline2
    .from('.myFace_xD', 4, {
        x:  800,
        opacity: 0,
        ease: Power3.easeInOut
    })
    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: 500,
        triggerHook: 0,
        // offset: '300'
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);

    let timeline3= new TimelineMax();
    timeline3
    .from('.big_screen', 4, {
        x:  2000,
        opacity: 0,
        ease: Power3.easeInOut
    }, "first")
    .from('.small_screen', 4, {
        y:  2000,
        opacity: 0,
        ease: Power3.easeInOut
    }, "first")
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.fourth-section',
        duration: 500,
        triggerHook: 0,
        // offset: '300'
    })
    .setTween(timeline3)
    .setPin('.fourth-section')
    .addTo(controller)
    .on('leave', function(e){
        document.querySelector('#number_1').classList.remove("reveal-text");
        document.querySelector('#title_1').classList.remove("reveal-text");
        document.querySelector('#work_done_1').classList.remove("reveal-text");
        document.querySelector('#disc_1').classList.remove("reveal-text");
    })
    .on('enter', function(e){
        document.querySelector('#number_1').classList.add("reveal-text");
        document.querySelector('#title_1').classList.add("reveal-text");
        document.querySelector('#work_done_1').classList.add("reveal-text");
        document.querySelector('#disc_1').classList.add("reveal-text");
        document.querySelector('#number_1').innerHTML = "01";
        document.querySelector('#title_1').innerHTML = "Meltdown";
        document.querySelector('#work_done_1').innerHTML = "Fullstack Developer • UI Designer";
        document.querySelector('#disc_1').innerHTML = "A site to centralize all gyms in nepal.";
    });

    let timeline4= new TimelineMax();
    timeline4
    .from('.big_screen_2', 4, {
        x:  2000,
        opacity: 0,
        ease: Power3.easeInOut
    }, "first")
    
    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.fifth-section',
        duration: 500,
        triggerHook: 0,
        // offset: '300'
    })
    .setPin('.fifth-section')
    .addTo(controller)
    .on('leave', function(e){
        document.querySelector('#number_1').classList.remove("reveal-text");
        document.querySelector('#title_1').classList.remove("reveal-text");
        document.querySelector('#work_done_1').classList.remove("reveal-text");
        document.querySelector('#disc_1').classList.remove("reveal-text");
    })
    .on('enter', function(e){
        document.querySelector('#number_1').classList.add("reveal-text");
        document.querySelector('#title_1').classList.add("reveal-text");
        document.querySelector('#work_done_1').classList.add("reveal-text");
        document.querySelector('#disc_1').classList.add("reveal-text");
        document.querySelector('#number_1').innerHTML = "02";
        document.querySelector('#title_1').innerHTML = "Melt.";
        document.querySelector('#work_done_1').innerHTML = "Fullstack Developer • UI Designer";
        document.querySelector('#disc_1').innerHTML = "An e commerce webapp.";
    });

    let timeline5= new TimelineMax();
    timeline5
    .from('.big_screen_3', 4, {
        x:  2000,
        opacity: 0,
        ease: Power3.easeInOut
    }, "first")
    let scene5 = new ScrollMagic.Scene({
        triggerElement: '.sixth-section',
        duration: 500,
        triggerHook: 0,
        // offset: '300'
    })
    .setPin('.sixth-section')
    .addTo(controller)
    .on('leave', function(e){
        document.querySelector('#number_1').classList.remove("reveal-text");
        document.querySelector('#title_1').classList.remove("reveal-text");
        document.querySelector('#work_done_1').classList.remove("reveal-text");
        document.querySelector('#disc_1').classList.remove("reveal-text");
    })
    .on('enter', function(e){
        document.querySelector('#number_1').classList.add("reveal-text");
        document.querySelector('#title_1').classList.add("reveal-text");
        document.querySelector('#work_done_1').classList.add("reveal-text");
        document.querySelector('#disc_1').classList.add("reveal-text");
        document.querySelector('#number_1').innerHTML = "03";
        document.querySelector('#title_1').innerHTML = "My Portfolio";
        document.querySelector('#work_done_1').innerHTML = "Design • Code";
        document.querySelector('#disc_1').innerHTML = "An interactive playable portfolio.";
    });

    let timeline6= new TimelineMax();
    timeline6
    .from('.big_screen_4', 4, {
        x:  2000,
        opacity: 0,
        ease: Power3.easeInOut
    }, "first")
    let scene6 = new ScrollMagic.Scene({
        triggerElement: '.seventh-section',
        duration: 500,
        triggerHook: 0,
        // offset: '300'
    })
    .setPin('.seventh-section')
    .addTo(controller)
    .on('leave', function(e){
        document.querySelector('#number_1').classList.remove("reveal-text");
        document.querySelector('#title_1').classList.remove("reveal-text");
        document.querySelector('#work_done_1').classList.remove("reveal-text");
        document.querySelector('#disc_1').classList.remove("reveal-text");
    })
    .on('enter', function(e){
        document.querySelector('#number_1').classList.add("reveal-text");
        document.querySelector('#title_1').classList.add("reveal-text");
        document.querySelector('#work_done_1').classList.add("reveal-text");
        document.querySelector('#disc_1').classList.add("reveal-text");
        document.querySelector('#number_1').innerHTML = "04";
        document.querySelector('#title_1').innerHTML = "Medinoor";
        document.querySelector('#work_done_1').innerHTML = "Fullstack Developer • UI Designer";
        document.querySelector('#disc_1').innerHTML = "Connect with doctors.";
    });

    let timeline7= new TimelineMax();
    timeline7
    .from('.big_screen_5', 4, {
        x:  2000,
        opacity: 0,
        ease: Power3.easeInOut
    }, "first")
    let scene7 = new ScrollMagic.Scene({
        triggerElement: '.eight-section',
        duration: 500,
        triggerHook: 0,
        // offset: '300'
    })
    .setPin('.eight-section')
    .addTo(controller)
    .on('leave', function(e){
        document.querySelector('#number_1').classList.remove("reveal-text");
        document.querySelector('#title_1').classList.remove("reveal-text");
        document.querySelector('#work_done_1').classList.remove("reveal-text");
        document.querySelector('#disc_1').classList.remove("reveal-text");
        if(e.state == "AFTER"){
            document.querySelector('#number_1').innerHTML = "";
            document.querySelector('#title_1').innerHTML = "";
            document.querySelector('#work_done_1').innerHTML = "";
            document.querySelector('#disc_1').innerHTML = "";
        }
    })
    .on('enter', function(e){
        document.querySelector('#number_1').classList.add("reveal-text");
        document.querySelector('#title_1').classList.add("reveal-text");
        document.querySelector('#work_done_1').classList.add("reveal-text");
        document.querySelector('#disc_1').classList.add("reveal-text");
        document.querySelector('#number_1').innerHTML = "05";
        document.querySelector('#title_1').innerHTML = "Patra";
        document.querySelector('#work_done_1').innerHTML = "Fullstack Developer • UI Designer";
        document.querySelector('#disc_1').innerHTML = "Encrypted Diary.";
    });
})