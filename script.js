function reloadThePage(){
   // window.location.reload();
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    var Removal = $('.onlyimage');
    if(w < 1010) {
        console.log("helllo world");
        document.querySelector('.onlyimage').remove();
    } else {
        $('.sweetme').append(Removal); 
        console.log("Bye world");
    }
}
reloadThePage();
 $(document).ready(function () {
    // $(window).load(function() {
    //     if($(window).width() < 1010) {
    //         console.log("helllo world");
    //         $('onlyimage').remove();
    //     } else {
    //         $('.sweetme').append(Removal); 
    //         console.log("Bye world");
    //     }
    // });
    var toBeRemoved = $('.onlyimage');
    $(window).resize(function() {
        if ($(window).width() < 1010) {
            $('.onlyimage').remove();
        } else {
            $('.sweetme').append(toBeRemoved);
        }
        })
});




window.onscroll = function() 
{
    /*Section 2*/
    document.querySelector('#about').addEventListener('click' , function(e) {
        e.preventDefault();
        document.querySelector('.about-me').scrollIntoView();
    });
    /*Section 3*/
    document.querySelector('#skilled').addEventListener('click' , function(e) {
        e.preventDefault();
        document.querySelector('.skills').scrollIntoView();
    });
    /*Section4*/
    document.querySelector('#contact').addEventListener('click' , function(e) {
        e.preventDefault();
        document.querySelector('.scroller').scrollIntoView();

    });

    document.querySelector('.contact-me').addEventListener('click' , function(e) {
        e.preventDefault();
        document.querySelector('.footer').scrollIntoView();

    });
}
document.querySelector('#copyright').innerHTML = (new Date().getFullYear());

const cancel = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click" , ()=>{
    arr.classList.add("active_arr");

    if(left_container.classList.contains("off")) {
        left_container.classList.remove("off");
        left_container.classList.add("active");

    }
    cancel.addEventListener("click" , ()=> {
        arr.classList.remove("active_arr");
        if(left_container.classList.contains("active")) {
            left_container.classList.remove("active");
            left_container.classList.add("off");
        }
    })
});


const cancel2 = document.querySelector(".cancel2");
const arr2 = document.querySelector(".arr_container2");
const left_container2 = document.querySelector(".left_container2");

arr2.addEventListener("click" , ()=>{
    arr2.classList.add("active_arr");

    if(left_container2.classList.contains("off")) {
        left_container2.classList.remove("off");
        left_container2.classList.add("active");

    }
    cancel2.addEventListener("click" , ()=> {
        arr2.classList.remove("active_arr");
        if(left_container2.classList.contains("active")) {
            left_container2.classList.remove("active");
            left_container2.classList.add("off");
        }
    })
});


const cancel3 = document.querySelector(".cancel3");
const arr3 = document.querySelector(".arr_container3");
const left_container3 = document.querySelector(".left_container3");

arr3.addEventListener("click" , ()=>{
    arr3.classList.add("active_arr");

    if(left_container3.classList.contains("off")) {
        left_container3.classList.remove("off");
        left_container3.classList.add("active");

    }
    cancel3.addEventListener("click" , ()=> {
        arr3.classList.remove("active_arr");
        if(left_container3.classList.contains("active")) {
            left_container3.classList.remove("active");
            left_container3.classList.add("off");
        }
    })
});

/*Mobile Menu*/
const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');
const coollist = document.getElementsByTagName("UL")[0];
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
    console.log("hello")
});
coollist.addEventListener('click', function() {
    menulinks.classList.toggle('active');
    menu.classList.toggle('is-active');;
});

var ele = document.querySelector('.scroller');
ele.style.backgroundColor = "rgba(22, 22, 35, 0.5)";