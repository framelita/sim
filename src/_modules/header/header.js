'use strict';

import $ from 'jquery';
export default class Header {
  constructor() {
    $('.header__item')
      .on('mouseenter', function(e) {
        let $this = $(this);
        $this.addClass('is-show');
      })
      .on('mouseleave', function() {
        $('.header__item').removeClass('is-show');
      });
  }
}
