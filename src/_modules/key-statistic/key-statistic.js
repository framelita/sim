'use strict';

import $ from 'jquery';
import counterUp from 'counterup2';
import ScrollOut from "scroll-out";

export default class KeyStatistic {
  constructor() {
    ScrollOut({
      onShown: function(el) {
        $('.js-animate-number').each(function() {
          var $this = $(this),
            speed = parseInt($this.attr('data-speed')) || 2000;

          counterUp( $this[0], {
            duration: speed,
            delay: 16,
          });
        });
      },
    });
  }
}
