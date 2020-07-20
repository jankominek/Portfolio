const rect = document.querySelectorAll(".rectangle");
const button = document.querySelector(".button_link");

const name = document.querySelector(".name");
const fLetter = document.querySelector(".fLetter");
const tLetter = document.querySelector(".tLetter");

const min_rect = document.querySelector(".min_rects");
const home = document.querySelector(".home");
const allPage = document.querySelector(".all");
//!! main page
const main_page = document.querySelector(".main_page");
const info = document.querySelector(".info");
const info_aboutMe = document.querySelector(".info_aboutMe");
const info_aboutMe_block = document.querySelector(".info_aboutMe_block");
const aboutMeButton = document.querySelector(".aboutMeButton");
const rotatingRect = document.querySelector(".rotatingRect")
//!! second page
const th_page_title = document.querySelector('.th_page_title');


//!!                         MAIN PAGE
const tl = new TimelineMax();
let some = document.createElement("div");
let opened = 0;

aboutMeButton.addEventListener('click', function() {
    //tl.set(aboutMeButton, { background: "rgb(255, 208, 0)" })
    if(opened === 0){
        some.classList.add('some');
        main_page.appendChild(some);
        tl.to(some, .7, { width: "87vw" })
            .to(info, .7, { x: "55vw", borderWidth: 3, width: "35vw", opacity: 1, }, "+=.3")
            .to(some, .7, { width: "47vw" }, "-=.7")
            .to(info_aboutMe, 2, { display: "block", opacity: 1 })
            .to(info_aboutMe_block, 2, { display: "block", opacity: 1 }, "-=2");
            opened = 1;
    }
    else{
        tl.set(info_aboutMe, { display: "none", opacity: 0 });
        tl.set(info_aboutMe_block, { display: "none", opacity: 0 });
        tl.to(some, .7, { width: "87vw" })
            .to(info, .7, { x: "95vw", borderWidth: 2, width: "0.1px", opacity: 1}, "-=.7")
            .to(some, .7, { width: "0px" }, "-=.0")
            opened = 0;
    }
    console.log(opened)
});
//!!                         SEC PAGE

function scrollAnim(){
    let mainPageShadow = document.querySelector('.sec_page');
    let pagePosition = mainPageShadow.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    
    if(pagePosition -200< screenPosition){
        mainPageShadow.classList.add('shadow');
    }
    if(pagePosition + 200>= screenPosition){
        mainPageShadow.classList.remove('shadow');
    }
}
window.addEventListener('scroll', () => {
    scrollAnim();
});


AOS.init({
    offset:200,
    duration: 1200
});

//!!                         THIRD PAGE





// START TESTING!

//tl.set(name, { visibility: 'visible' });
//tl.set(button, { visibility: 'hidden' });
//tl.set(rect[0], { visibility: 'visible' });
//tl.set(rect[1], { visibility: 'visible' });
//tl.set(rect, { visibility: 'visible', width: 200, height: 200, rotation: 0 });
//tl.set(rect[0], { borderRight: 0, borderBottom: 0, rotation: 0, width: 200, height: 200 });
//tl.set(rect[1], { borderLeft: 0, borderTop: 0, rotation: 0, width: 200, height: 200 });



// //random from window width
// let xWindow = window.innerWidth;
// let yWindow = window.innerHeight;




// //rect position
// let xR = rect[0].offsetLeft;
// let yR = rect[0].offsetTop;


// let xPosition;
// let yPosition;






// for (let i = 0; i < 10; i++) {
//     let random = Math.random();
//     xPosition = random * xWindow + "px";
//     yPosition = random * yWindow + "px";

//     let el = document.createElement("div");
//     el.classList.add("min_rects");
//     el.style.setProperty("background-color", "snow");
//     el.style.setProperty("margin-left", xPosition);
//     el.style.setProperty("margin-top", yPosition);
//     home.appendChild(el);
//     tl.to(el, .2, { x: xR, y: yR });
//     xR += 20;
// }
// xR = rect[0].offsetLeft;
// yR += 20;

// //home.appendChild(el);



//tl.set(button, { display: 'none' });
//tl.set(main_page, { opacity: 1, translateX: 0 });
//tl.to(main_page, 2, { opacity: 1, translateX: 0 });
//tl.to(info, 2, { opacity: 1, height: 80 });



//END TESTING!


//tl.set(rect, { rotation: 45 });
button.addEventListener("click", function() {

    tl.set(button, { display: 'none' });
    tl.set(rect, { visibility: 'visible' });
    tl.to(rect, 2, { opacity: 1, rotation: 405, ease: Power2.easeOut });


    tl.set(rect[0], { borderRight: 0, borderBottom: 0 });
    tl.set(rect[1], { borderLeft: 0, borderTop: 0 });

    tl.to(rect[0], .8, { x: 0, y: -25, })
        .to(rect[1], .8, { x: 0, y: 25 }, "-=.8")
        .to(rect[0], .4, { x: 20, y: 0, width: 200, height: 200, rotation: 495 })
        .to(rect[1], .4, { x: -20, y: 0, width: 200, height: 200, rotation: 495 }, "-=.4")
        .to(rect[0], .3, { x: -100 })
        .to(rect[1], .3, { x: 100 }, "-=.3")
        .to(rect[0], .7, { x: 300 })
        .to(rect[1], .7, { x: -300 }, "-=.7");

    tl.set(name, { visibility: 'visible' });
    tl.to(rect[0], 1, { x: 0, delay: 1 })
        .to(rect[1], 1, { x: 0 }, "-=1");

    tl.to(rect[0], .5, { rotation: 450, x: 2, y: -2 })
        .to(rect[1], .5, { rotation: 450 }, "-=.5");

    tl.to(rect[0], 3, { backgroundColor: 'snow', boxShadow: "0 0 50px 5px  snow" })
        .to(fLetter, 3, { color: 'rgb(8, 8, 8)' }, "-=3")
        .to(tLetter, 3, { color: 'rgb(8, 8, 8)' }, "-=3");


    tl.to(home, 0, { opacity: 0, display: 'none' });

    tl.to(main_page, .5, { opacity: 1, translateX: 0 });
    tl.to(allPage, .5, { display: 'block', opacity: 1 });

});