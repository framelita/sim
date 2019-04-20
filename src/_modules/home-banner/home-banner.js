'use strict';

import $ from 'jquery';

export default class HomeBanner {
  constructor() {
    $('.home-banner__title .text').each(function(index) {
      let $this = $(this);

      var i = 0;
      var txt = $this.text(),
        width = $this.outerWidth();
      var speed = 100;

      $this
        .css({
          width: width
        })
        // .text('')
        .addClass('is-show');

      // typeWriter();

      // function typeWriter() {
      //   if (i < txt.length) {
      //     let text = $this.text() + txt.charAt(i);
      //     console.log(text, txt.charAt(i));
      //     $this.text( text );
      //     i++;
      //     setTimeout(typeWriter, speed);
      //   }
      // }
    });
  }
}
