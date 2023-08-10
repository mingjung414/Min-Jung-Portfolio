 $(function(){
 var swiper = new Swiper('.slide ', {
  spaceBetween: 50,
    speed: 1000,//버튼을 슬라이드가 넘어가는 시간
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
      },
    });
});