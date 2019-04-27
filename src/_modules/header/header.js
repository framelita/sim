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

      let lastPath = window.location.pathname.split('/').slice(-1)[0];

      if (lastPath == '') {
        lastPath = window.location.pathname.split('/').slice(-2)[0];
      }

      console.log(hashtag, href, window.location.pathname, href.indexOf(lastPath));
      if (lastPath != '' &&  href.indexOf(lastPath) >= 0) {
        //if url is for current page
        let scrollTop = $(`#${hashtag}`).offset().top - $('.header').outerHeight();
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
