import $ from "jquery";

export default {
  scroll() {
    let zero = 0;
    let scrollImg = $('.scroll-container');

    $(window).on('scroll',function(){
      let scrollAfter = $(this).scrollTop();

      scrollImg.each(function(){
        let posTop = $(this).position().top;
        let imgH = $(this).outerHeight();
        let img = $(this).find('img');
        // console.log(posTop);
        if(scrollAfter > (posTop / 2)) {
          // console.log('in');
          img.css('transform', `translateY(-${scrollAfter * 0.3}px)`);
          if(scrollAfter > (posTop + (imgH / 2))) {
            // console.log('out');
            img.css('transform', `translateY(-${(posTop + (imgH / 2)) * 0.3}px)`);
          }
        }
      })
      zero = scrollAfter;
    })
  }
}