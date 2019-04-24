'use strict';

import $ from 'jquery';

export default class BannerNav {
  constructor() {
    $('.js-banner-nav').on('click', function(e) {
      e.preventDefault();
      let $this = $(this),
        href = $this.attr('href'),
        scrollTop = $(`${href}`).offset().top - $('.header').outerHeight();

      $this.addClass('is-active').siblings().removeClass('is-active');

      $('html, body').animate({
        scrollTop: scrollTop
      }, 1000);
    });

    if ($('.js-banner-nav').length && window.location.hash) {
      $(`.js-banner-nav[href="${window.location.hash}"]`).addClass('is-active').siblings().removeClass('is-active');
    }
  }
}
