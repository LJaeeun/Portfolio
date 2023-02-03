window.onload = function init(){
 
  //estrelas // 배경 별
  (function bg() {
    let style = ["style1", "style2", "style3", "style4"];
    let tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    let opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
    
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    let estrela = "";
    let qtdeEstrelas = 650;
    let body = document.querySelector(".constelacao");
    let widthWindow = window.innerWidth;
    let heightWindow = document.body.clientHeight;
/*     console.log(document.documentElement.clientHeight)
    console.log(heightWindow)
    console.log(document.body.clientHeight) */

    
    for (let i = 0; i < qtdeEstrelas; i++) {
      estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
      + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
      + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }
    
    body.innerHTML = estrela;
  })();

  /* 마우스 커서 커스텀 */
  (function corsor() {
    const cursorBall = document.querySelector('.cursor__ball--big');
    const hoverables = document.querySelectorAll('.hoverable');
    
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
    
    function onMouseMove(e) {
      TweenMax.to(cursorBall, .1, {
        x: e.pageX - 20,
        y: e.pageY - 20
      })
    }
    
    function onMouseHover() {
      TweenMax.to(cursorBall, .1, {
        scale: 4
      })
    }
    function onMouseHoverOut() {
      TweenMax.to(cursorBall, .1, {
        scale: 1
      })
    }
  })();

  /* sideNav 메뉴바 */
  (function sideMenu() {
    const sideNav = document.querySelector('#sideNav');

    addEventListener('scroll', () => {
      let ht = document.documentElement.scrollTop;
      scrollY > 800 ? sideNav.style.opacity = 1 : sideNav.style.opacity = 0;
    })    
  })();

  /* 스크롤시 로고/이메일 줄어들음 */
  (function logo() {
    $(window).scroll(function() {    
      let scroll = $(window).scrollTop();
      //console.log(scroll);
      if (scroll >= 100) {
        $(".srcollH1").addClass("logoActive");
      } else {
        $(".srcollH1").removeClass("logoActive");
      }
    });
  })();  
    
  /* 스킬 박스 */
  (function mouseover() {

    let starColorChange1 = document.querySelector('.mouseHover1');
    let starColorChange2 = document.querySelector('.mouseHover2');
    let starColorChange3 = document.querySelector('.mouseHover3');
    let starColorChange4 = document.querySelector('.mouseHover4');
    let starColorChange5 = document.querySelector('.mouseHover5');

    let HBox = document.querySelector('.HBox');
    let JBox = document.querySelector('.JBox');
    let RBox = document.querySelector('.RBox');
    let DBox = document.querySelector('.DBox');
    let GBox = document.querySelector('.GBox');

    /* 1번 박스 */
    starColorChange1.addEventListener('mouseover', function() {
      HBox.classList.add('active');
    })
    starColorChange1.addEventListener('mouseout', function() {
      HBox.classList.remove('active');
    })
    /* 2번 박스 */
    starColorChange2.addEventListener('mouseover', function() {
      JBox.classList.add('active');
    })
    starColorChange2.addEventListener('mouseout', function() {
      JBox.classList.remove('active');
    })
    /* 3번 박스 */
    starColorChange3.addEventListener('mouseover', function() {
      RBox.classList.add('active');
    })
    starColorChange3.addEventListener('mouseout', function() {
      RBox.classList.remove('active');
    })
    /* 4번 박스 */
    starColorChange4.addEventListener('mouseover', function() {
      DBox.classList.add('active');
    })
    starColorChange4.addEventListener('mouseout', function() {
      DBox.classList.remove('active');
    })
    /* 5번 박스 */
    starColorChange5.addEventListener('mouseover', function() {
      GBox.classList.add('active');
    })
    starColorChange5.addEventListener('mouseout', function() {
      GBox.classList.remove('active');
    })
  })();

  /* skill 제목 */
  (function skillH2() {
    let skillH2 = document.querySelector('.skillH2');

    addEventListener('scroll', () => {
      if(scrollY > 600) {
        skillH2.style.opacity = "1"
        skillH2.style.transform = "translateY(0)"
        if(scrollY >= 1222) {
          skillH2.style.opacity = '0'
        }
      } else {
        skillH2.style.transform = "translateY(-300px)"
        skillH2.style.opacity = '0'
      }
    })
  })();

  /* project 제목 */
  (function projecth2() {
    let proH2 = document.querySelector('.proH2');

    addEventListener('scroll', () => {
      /* console.log(scrollY); */
      if(scrollY > 1990) {
        proH2.style.opacity = '1'
        if(scrollY >= 2200) {
          proH2.style.transform = 'translateX(0)'
          if(scrollY > 2800) {
            proH2.style.transform = 'translateX(30%)'
            if(scrollY > 2850) {
              proH2.style.opacity = '0'
            }
          } 
        }
      }
      else {
        proH2.style.transform = 'translateX(-30%)'
        proH2.style.opacity = '0'
      }
    })
  })();

/* project imgbox */
 (function projectImg() {
  let ImgBox = document.querySelector('.imgbox');
  let img1 = document.querySelector('#img1');
  let img2 = document.querySelector('#img2');
  let img3 = document.querySelector('#img3');
  let img4 = document.querySelector('#img4');
  console.log(img1.offsetTop);
  console.log(img2.offsetTop);
  console.log(img3.offsetTop);
  console.log(img4.offsetTop);
  let top1 = img1.offsetTop;
  let top2 = img2.offsetTop;
  let top3 = img3.offsetTop;
  let top4 = img4.offsetTop;

  addEventListener('scroll', () => {
    // console.log(scrollY);
    if(scrollY > 2490) {
      ImgBox.style.transform = 'translateY(0)';
      if(scrollY >= 2510) {
        img1.style.opacity = '1';
        if(scrollY >= 3064) {
          img2.style.opacity = '1';
          if(scrollY >= 3550) {
            img3.style.opacity = '1';
            if(scrollY >= 3970) {
              img4.style.opacity = '1';
              if(scrollY >= 4375) {
                ImgBox.style.position = 'none';
                ImgBox.style.transform = 'translateY(150px)';
                if (scrollY > 4400) {
                  ImgBox.style.opacity = '0';
                } 
              } else {
                ImgBox.style.opacity = '1';
              }
            } else {
              img4.style.opacity = '0';
            }
          } else {
            img3.style.opacity = '0';
          }
        } else {
          img2.style.opacity = '0';
        }
      } else {
        img1.style.opacity = '0';
      }
    } else {
      ImgBox.style.transform = 'translateY(-150px)';
      img1.style.opacity = '0';
    }
  })



  })();


}


  