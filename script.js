// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// timeline
// // .to('#image_front', 3 , {top:'0%'}, "-=3 ")
// .fromTo('#Le_titre', { opacity: 0 }, {opacity: 1, duration: 3 } )


// let scene = new ScrollMagic.Scene({
//     triggerElement: ".yo",
//     duration: "300%",
//     triggerHook: 0,
//   })

//     .setTween(timeline)
//     .setPin("section")
//     .addTo(controller);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})