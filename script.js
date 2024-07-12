




function color() {

    // For Backgroound

    var opneBg = document.querySelector("#containercolor #bg");
    var closeBg = document.querySelector("#backdrop #cross");

    opneBg.addEventListener("click", function (dept) {
        gsap.to("#containercolor #backdrop", {
            display: "initial",
            top: (dept.y + 280) + "px",
            left: (dept.x - 120) + "px",
        })
        document.querySelector("#remix").style.display = "none"
    })

    document.querySelector("#zeroBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/0.svg" alt="">`
    })
    document.querySelector("#oneBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/1.svg" alt="">`
    })
    document.querySelector("#twoBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/2.svg" alt="">`
    })
    document.querySelector("#threeBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/3.svg" alt="">`
    })
    document.querySelector("#fourBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/4.svg" alt="">`
    })
    document.querySelector("#fiveBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/5.svg" alt="">`
    })
    document.querySelector("#sixBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/6.svg" alt="">`
    })
    document.querySelector("#sevenBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/7.svg" alt="">`
    })
    document.querySelector("#eightBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/colorful/8.svg" alt="">`
    })

    closeBg.addEventListener("click", function () {
        gsap.to("#containercolor #backdrop", {
            display: "none",
        })
    })


    // For Character

    document.querySelector("#walk_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })

        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
            <div id="rem_head">
                <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">
                <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">
                <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">
                <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">
                <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">
                <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">
                <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">
                <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">
                <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">
            </div>
            <div id="rem_hand">
                <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/colorful/walking/1.svg" alt="">
                <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/colorful/walking/2.svg" alt="">
                <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/colorful/walking/3.svg" alt="">
                <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/colorful/walking/4.svg" alt="">
                <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/colorful/walking/5.svg" alt="">
                <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/colorful/walking/6.svg" alt="">
                <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/colorful/walking/7.svg" alt="">
                <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/colorful/walking/8.svg" alt="">
            </div>
            <div id="rem_leg">
                <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/1.svg" alt="">
                <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/2.svg" alt="">
                <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/3.svg" alt="">
                <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/4.svg" alt="">
                <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/5.svg" alt="">
                <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/6.svg" alt="">
                <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/7.svg" alt="">
                <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/8.svg" alt="">
            </div>`

        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/8.svg" alt="">`
        })

    })

    document.querySelector("#run_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })


        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
            <div id="rem_head">
                <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">
                <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">
                <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">
                <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">
                <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">
                <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">
                <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">
                <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">
                <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">
            </div>
            <div id="rem_hand">
                <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/colorful/running/1.svg" alt="">
                <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/colorful/running/2.svg" alt="">
                <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/colorful/running/3.svg" alt="">
                <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/colorful/running/4.svg" alt="">
                <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/colorful/running/5.svg" alt="">
                <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/colorful/running/6.svg" alt="">
                <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/colorful/running/7.svg" alt="">
                <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/colorful/running/8.svg" alt="">
            </div>
            <div id="rem_leg">
                <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/1.svg" alt="">
                <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/2.svg" alt="">
                <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/3.svg" alt="">
                <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/4.svg" alt="">
                <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/5.svg" alt="">
                <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/6.svg" alt="">
                <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/7.svg" alt="">
                <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/colorful/running/8.svg" alt="">
            </div>`


        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/running/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/running/8.svg" alt="">`
        })

    })
    document.querySelector("#stand_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })

        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
            <div id="rem_head">
                <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">
                <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">
                <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">
                <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">
                <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">
                <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">
                <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">
                <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">
                <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">
            </div>
            <div id="rem_hand">
                <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/colorful/standing/1.svg" alt="">
                <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/colorful/standing/2.svg" alt="">
                <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/colorful/standing/3.svg" alt="">
                <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/colorful/standing/4.svg" alt="">
                <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/colorful/standing/5.svg" alt="">
                <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/colorful/standing/6.svg" alt="">
                <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/colorful/standing/7.svg" alt="">
                <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/colorful/standing/8.svg" alt="">
            </div>
            <div id="rem_leg">
                <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/1.svg" alt="">
                <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/2.svg" alt="">
                <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/3.svg" alt="">
                <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/4.svg" alt="">
                <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/5.svg" alt="">
                <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/6.svg" alt="">
                <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/7.svg" alt="">
                <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/8.svg" alt="">
            </div>`


        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/standing/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/standing/8.svg" alt="">`
        })

    })
    document.querySelector("#cycle_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "4px solid #FF3E3E",
        })


        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
            <div id="rem_head">
                <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">
                <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">
                <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">
                <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">
                <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">
                <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">
                <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">
                <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">
                <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">
            </div>
            <div id="rem_hand">
                <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/1.svg" alt="">
                <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/2.svg" alt="">
                <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/3.svg" alt="">
                <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/4.svg" alt="">
                <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/5.svg" alt="">
                <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/6.svg" alt="">
                <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/7.svg" alt="">
                <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/colorful/cycling/8.svg" alt="">
            </div>
            <div id="rem_leg">
                <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/1.svg" alt="">
                <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/2.svg" alt="">
                <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/3.svg" alt="">
                <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/4.svg" alt="">
                <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/5.svg" alt="">
                <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/6.svg" alt="">
                <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/7.svg" alt="">
                <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/8.svg" alt="">
            </div>`


        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">`
        })

        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/cycling/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/cycling/8.svg" alt="">`
        })

    })


    var charRem = document.querySelector("#containercolor #charachter")
    var charRemClose = document.querySelector("#containercolor #remix h5 i")
    var char_head = document.querySelector("#char_head")
    var char_hand = document.querySelector("#char_hand")
    var char_leg = document.querySelector("#char_leg")

    charRem.addEventListener("click", function (dept) {
        gsap.to("#remix", {
            display: "initial",
            top: (dept.y + 280) + "px",
            left: (dept.x - 120) + "px",
        })
        document.querySelector("#backdrop").style.display = "none"
    })

    document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/1.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/2.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/3.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/4.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/5.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/6.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/7.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/8.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/colorful/9.svg" alt="">`
    })



    document.querySelector("#rem_hand1").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/1.svg" alt="">`
    })
    document.querySelector("#rem_hand2").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/2.svg" alt="">`
    })
    document.querySelector("#rem_hand3").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/3.svg" alt="">`
    })
    document.querySelector("#rem_hand4").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/4.svg" alt="">`
    })
    document.querySelector("#rem_hand5").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/5.svg" alt="">`
    })
    document.querySelector("#rem_hand6").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/6.svg" alt="">`
    })
    document.querySelector("#rem_hand7").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/7.svg" alt="">`
    })
    document.querySelector("#rem_hand8").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/colorful/walking/8.svg" alt="">`
    })


    document.querySelector("#rem_leg1").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/1.svg" alt="">`
    })
    document.querySelector("#rem_leg2").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/2.svg" alt="">`
    })
    document.querySelector("#rem_leg3").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/3.svg" alt="">`
    })
    document.querySelector("#rem_leg4").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/4.svg" alt="">`
    })
    document.querySelector("#rem_leg5").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/5.svg" alt="">`
    })
    document.querySelector("#rem_leg6").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/6.svg" alt="">`
    })
    document.querySelector("#rem_leg7").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/7.svg" alt="">`
    })
    document.querySelector("#rem_leg8").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/colorful/walking/8.svg" alt="">`
    })


    charRemClose.addEventListener("click", function () {
        gsap.to("#remix", {
            display: "none",
        })
    })

}

document.querySelector("#color_nav").addEventListener("click", function () {
    color();
    document.querySelector("#containercolor").style.display = "initial";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#containerBlack").style.display = "none";

    gsap.to("#right_nav #color_nav h2 i", {
        border: " 4px solid #FF3E3E",
    })
    gsap.to("#right_nav #duotone_nav h2 i", {
        border: "2px dashed gray",
    })
    gsap.to("#right_nav #outline h2 i", {
        border: " 2px dashed gray",
    })
})


function black() {
    var opneBg = document.querySelector("#containerBlack #bg");
    var closeBg = document.querySelector("#backdrop #cross");

    opneBg.addEventListener("click", function (dept) {
        gsap.to("#containerBlack #backdrop", {
            display: "initial",
            top: (dept.y + 280) + "px",
            left: (dept.x - 120) + "px",
        })
        document.querySelector("#remix").style.display = "none"
    })
    document.querySelector("#zeroBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/previews/0.svg" alt="">`
    })
    document.querySelector("#oneBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/1.svg" alt="">`
    })
    document.querySelector("#twoBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/2.svg" alt="">`
    })
    document.querySelector("#threeBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/3.svg" alt="">`
    })
    document.querySelector("#fourBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/4.svg" alt="">`
    })
    document.querySelector("#fiveBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/5.svg" alt="">`
    })
    document.querySelector("#sixBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/6.svg" alt="">`
    })
    document.querySelector("#sevenBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/7.svg" alt="">`
    })
    document.querySelector("#eightBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/8.svg" alt="">`
    })

    closeBg.addEventListener("click", function () {
        gsap.to("#containerBlack #backdrop", {
            display: "none",
        })
    })


    // For Character

    document.querySelector("#walk_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })

        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/duotone/walking/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/duotone/walking/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/duotone/walking/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/duotone/walking/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/duotone/walking/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/duotone/walking/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/duotone/walking/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/duotone/walking/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/8.svg" alt="">
        </div>`

        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/8.svg" alt="">`
        })

    })
    document.querySelector("#run_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })


        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/duotone/running/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/duotone/running/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/duotone/running/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/duotone/running/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/duotone/running/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/duotone/running/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/duotone/running/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/duotone/running/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/duotone/running/8.svg" alt="">
        </div>`


        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">`
        })



        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/running/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/running/8.svg" alt="">`
        })

    })
    document.querySelector("#stand_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })

        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/duotone/standing/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/duotone/standing/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/duotone/standing/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/duotone/standing/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/duotone/standing/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/duotone/standing/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/duotone/standing/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/duotone/standing/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/8.svg" alt="">
        </div>`


        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">`
        })



        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/standing/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/standing/8.svg" alt="">`
        })

    })
    document.querySelector("#cycle_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "4px solid #FF3E3E",
        })


        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/duotone/cycling/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/8.svg" alt="">
        </div>`

        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">`
        })



        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/cycling/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/cycling/8.svg" alt="">`
        })

    })


    var charRem = document.querySelector("#containerBlack #charachter")
    var charRemClose = document.querySelector("#containerBlack #remix h5 i")
    var char_head = document.querySelector("#char_head")
    var char_hand = document.querySelector("#char_hand")
    var char_leg = document.querySelector("#char_leg")

    charRem.addEventListener("click", function (dept) {
        gsap.to("#remix", {
            display: "initial",
            top: (dept.y + 280) + "px",
            left: (dept.x - 120) + "px",
        })
        document.querySelector("#backdrop").style.display = "none"
    })

    document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/1.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/2.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/3.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/4.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/5.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/6.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/7.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/8.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/duotone/9.svg" alt="">`
    })



    document.querySelector("#rem_hand1").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/1.svg" alt="">`
    })
    document.querySelector("#rem_hand2").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/2.svg" alt="">`
    })
    document.querySelector("#rem_hand3").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/3.svg" alt="">`
    })
    document.querySelector("#rem_hand4").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/4.svg" alt="">`
    })
    document.querySelector("#rem_hand5").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/5.svg" alt="">`
    })
    document.querySelector("#rem_hand6").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/6.svg" alt="">`
    })
    document.querySelector("#rem_hand7").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/7.svg" alt="">`
    })
    document.querySelector("#rem_hand8").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/duotone/walking/8.svg" alt="">`
    })


    document.querySelector("#rem_leg1").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/1.svg" alt="">`
    })
    document.querySelector("#rem_leg2").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/2.svg" alt="">`
    })
    document.querySelector("#rem_leg3").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/3.svg" alt="">`
    })
    document.querySelector("#rem_leg4").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/4.svg" alt="">`
    })
    document.querySelector("#rem_leg5").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/5.svg" alt="">`
    })
    document.querySelector("#rem_leg6").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/6.svg" alt="">`
    })
    document.querySelector("#rem_leg7").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/7.svg" alt="">`
    })
    document.querySelector("#rem_leg8").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/duotone/walking/8.svg" alt="">`
    })


    charRemClose.addEventListener("click", function () {
        gsap.to("#remix", {
            display: "none",
        })
    })

}

document.querySelector("#duotone_nav").addEventListener("click", function () {

    black();
    document.querySelector("#container").style.display = "none";
    document.querySelector("#containercolor").style.display = "none";
    document.querySelector("#containerBlack").style.display = "initial";

    gsap.to("#right_nav #outline h2 i", {
        border: "2px dashed gray",
    })
    gsap.to("#right_nav #duotone_nav h2 i", {
        border: " 4px solid #FF3E3E",
    })
    gsap.to("#right_nav #color_nav h2 i", {
        border: " 2px dashed gray",
    })
})


function outline() {
    var opneBg = document.querySelector("#container #bg");
    var closeBg = document.querySelector("#backdrop #cross");

    opneBg.addEventListener("click", function (dept) {
        gsap.to("#container #backdrop", {
            display: "initial",
            top: (dept.y + 280) + "px",
            left: (dept.x - 120) + "px",
        })
        document.querySelector("#remix").style.display = "none"
    })
    document.querySelector("#zeroBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/previews/0.svg" alt="">`
    })
    document.querySelector("#oneBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/1.svg" alt="">`
    })
    document.querySelector("#twoBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/2.svg" alt="">`
    })
    document.querySelector("#threeBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/3.svg" alt="">`
    })
    document.querySelector("#fourBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/4.svg" alt="">`
    })
    document.querySelector("#fiveBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/5.svg" alt="">`
    })
    document.querySelector("#sixBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/6.svg" alt="">`
    })
    document.querySelector("#sevenBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/7.svg" alt="">`
    })
    document.querySelector("#eightBg").addEventListener("click", function () {
        document.querySelector("#bg_img_box").innerHTML = `<img src="https://sapiens.ui8.net/images/backdrops/outline/8.svg" alt="">`
    })

    closeBg.addEventListener("click", function () {
        gsap.to("#container #backdrop", {
            display: "none",
        })
    })


    // For Character

    document.querySelector("#walk_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })

        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/outline/walking/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/outline/walking/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/outline/walking/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/outline/walking/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/outline/walking/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/outline/walking/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/outline/walking/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/outline/walking/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/outline/walking/8.svg" alt="">
        </div>`

        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/8.svg" alt="">`
        })

    })
    document.querySelector("#run_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })


        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/outline/running/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/outline/running/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/outline/running/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/outline/running/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/outline/running/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/outline/running/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/outline/running/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/outline/running/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/outline/running/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/outline/running/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/outline/running/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/outline/running/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/outline/running/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/outline/running/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/outline/running/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/outline/running/8.svg" alt="">
        </div>`


        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/running/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/running/8.svg" alt="">`
        })

    })
    document.querySelector("#stand_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "4px solid #FF3E3E",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "2px dashed gray",
        })

        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/outline/standing/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/outline/standing/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/outline/standing/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/outline/standing/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/outline/standing/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/outline/standing/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/outline/standing/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/outline/standing/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/outline/standing/8.svg" alt="">
        </div>`


        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/standing/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/standing/8.svg" alt="">`
        })

    })
    document.querySelector("#cycle_nav").addEventListener("click", function () {
        gsap.to("#walk_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#run_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#stand_nav h2 i", {
            border: "2px dashed gray",
        })
        gsap.to("#cycle_nav h2 i", {
            border: "4px solid #FF3E3E",
        })


        document.querySelector("#remix").innerHTML =
            ` <h5>Remix <i class="fa-sharp fa-solid fa-xmark"></i></h5>
        <div id="rem_head">
            <img id="rem_head1" src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">
            <img id="rem_head2" src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">
            <img id="rem_head3" src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">
            <img id="rem_head4" src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">
            <img id="rem_head5" src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">
            <img id="rem_head6" src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">
            <img id="rem_head7" src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">
            <img id="rem_head8" src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">
            <img id="rem_head9" src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">
        </div>
        <div id="rem_hand">
            <img id="rem_hand1" src="https://sapiens.ui8.net/images/female/top/outline/cycling/1.svg" alt="">
            <img id="rem_hand2" src="https://sapiens.ui8.net/images/female/top/outline/cycling/2.svg" alt="">
            <img id="rem_hand3" src="https://sapiens.ui8.net/images/female/top/outline/cycling/3.svg" alt="">
            <img id="rem_hand4" src="https://sapiens.ui8.net/images/female/top/outline/cycling/4.svg" alt="">
            <img id="rem_hand5" src="https://sapiens.ui8.net/images/female/top/outline/cycling/5.svg" alt="">
            <img id="rem_hand6" src="https://sapiens.ui8.net/images/female/top/outline/cycling/6.svg" alt="">
            <img id="rem_hand7" src="https://sapiens.ui8.net/images/female/top/outline/cycling/7.svg" alt="">
            <img id="rem_hand8" src="https://sapiens.ui8.net/images/female/top/outline/cycling/8.svg" alt="">
        </div>
        <div id="rem_leg">
            <img id="rem_leg1" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/1.svg" alt="">
            <img id="rem_leg2" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/2.svg" alt="">
            <img id="rem_leg3" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/3.svg" alt="">
            <img id="rem_leg4" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/4.svg" alt="">
            <img id="rem_leg5" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/5.svg" alt="">
            <img id="rem_leg6" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/6.svg" alt="">
            <img id="rem_leg7" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/7.svg" alt="">
            <img id="rem_leg8" src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/8.svg" alt="">
        </div>`

        document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">`
        })
        document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
            char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">`
        })


        document.querySelector("#rem_hand1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/1.svg" alt="">`
        })
        document.querySelector("#rem_hand2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/2.svg" alt="">`
        })
        document.querySelector("#rem_hand3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/3.svg" alt="">`
        })
        document.querySelector("#rem_hand4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/4.svg" alt="">`
        })
        document.querySelector("#rem_hand5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/5.svg" alt="">`
        })
        document.querySelector("#rem_hand6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/6.svg" alt="">`
        })
        document.querySelector("#rem_hand7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/7.svg" alt="">`
        })
        document.querySelector("#rem_hand8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/cycling/8.svg" alt="">`
        })


        document.querySelector("#rem_leg1").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/1.svg" alt="">`
        })
        document.querySelector("#rem_leg2").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/2.svg" alt="">`
        })
        document.querySelector("#rem_leg3").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/3.svg" alt="">`
        })
        document.querySelector("#rem_leg4").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/4.svg" alt="">`
        })
        document.querySelector("#rem_leg5").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/5.svg" alt="">`
        })
        document.querySelector("#rem_leg6").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/6.svg" alt="">`
        })
        document.querySelector("#rem_leg7").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/7.svg" alt="">`
        })
        document.querySelector("#rem_leg8").addEventListener("click", function () {
            char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/cycling/8.svg" alt="">`
        })

    })


    var charRem = document.querySelector("#container #charachter")
    var charRemClose = document.querySelector("#container #remix h5 i")
    var char_head = document.querySelector("#char_head")
    var char_hand = document.querySelector("#char_hand")
    var char_leg = document.querySelector("#char_leg")

    charRem.addEventListener("click", function (dept) {
        gsap.to("#remix", {
            display: "initial",
            top: (dept.y + 280) + "px",
            left: (dept.x - 120) + "px",
        })
        document.querySelector("#backdrop").style.display = "none"
    })

    document.querySelector("#rem_head #rem_head1").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/1.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head2").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/2.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head3").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/3.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head4").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/4.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head5").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/5.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head6").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/6.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head7").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/7.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head8").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/8.svg" alt="">`
    })
    document.querySelector("#rem_head #rem_head9").addEventListener("click", function () {
        char_head.innerHTML = `<img src="https://sapiens.ui8.net/images/female/head/outline/9.svg" alt="">`
    })



    document.querySelector("#rem_hand1").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/1.svg" alt="">`
    })
    document.querySelector("#rem_hand2").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/2.svg" alt="">`
    })
    document.querySelector("#rem_hand3").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/3.svg" alt="">`
    })
    document.querySelector("#rem_hand4").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/4.svg" alt="">`
    })
    document.querySelector("#rem_hand5").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/5.svg" alt="">`
    })
    document.querySelector("#rem_hand6").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/6.svg" alt="">`
    })
    document.querySelector("#rem_hand7").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/7.svg" alt="">`
    })
    document.querySelector("#rem_hand8").addEventListener("click", function () {
        char_hand.innerHTML = `<img src="https://sapiens.ui8.net/images/female/top/outline/walking/8.svg" alt="">`
    })


    document.querySelector("#rem_leg1").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/1.svg" alt="">`
    })
    document.querySelector("#rem_leg2").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/2.svg" alt="">`
    })
    document.querySelector("#rem_leg3").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/3.svg" alt="">`
    })
    document.querySelector("#rem_leg4").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/4.svg" alt="">`
    })
    document.querySelector("#rem_leg5").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/5.svg" alt="">`
    })
    document.querySelector("#rem_leg6").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/6.svg" alt="">`
    })
    document.querySelector("#rem_leg7").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/7.svg" alt="">`
    })
    document.querySelector("#rem_leg8").addEventListener("click", function () {
        char_leg.innerHTML = `<img src="https://sapiens.ui8.net/images/female/bottom/outline/walking/8.svg" alt="">`
    })


    charRemClose.addEventListener("click", function () {
        gsap.to("#remix", {
            display: "none",
        })
    })

}

document.querySelector("#outline").addEventListener("click", function () {
    document.querySelector("#container").style.display = "initial";
    document.querySelector("#containercolor").style.display = "none";
    document.querySelector("#containerBlack").style.display = "none";
    gsap.to("#right_nav #outline h2 i", {
        border: " 4px solid #FF3E3E",
    })
    gsap.to("#right_nav #duotone_nav h2 i", {
        border: "2px dashed gray",
    })
    gsap.to("#right_nav #color_nav h2 i", {
        border: " 2px dashed gray",
    })
    outline();
})







