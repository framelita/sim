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

    $('.child__link').on('click', function(e) {
      e.preventDefault();

      let $this = $(this),
        href = $this.attr('href'),
        hashtag = href.split('#').pop();

      if ($(`#${hashtag}`).length) {
        //if url is for current page
        let scrollTop = $(`#${hashtag}`).offset().top - $('.header').outerHeight();
        if ($('.js-toggle-menu').hasClass('is-active')) {
          $('.js-toggle-menu').removeClass('is-active');
        }
        $('html, body').animate({
          scrollTop: scrollTop
        }, 1000);
      } else {
        window.location = href;
      }
    });

    if(window.location.hash && $(window.location.hash).length) {
      let scrollTop = $(window.location.hash).offset().top - $('.header').outerHeight();
      $('html, body').animate({
        scrollTop: scrollTop
      }, 1000);
    }

    $('.js-toggle-menu').on('click', function() {
      $(this).toggleClass('is-active');
    });
  }
}
