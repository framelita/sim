'use strict';

import $ from 'jquery';

export default class AboutAccordion {
  constructor() {
    $('.js-about-accordion').on('click', function() {
      let $this = $(this);

      if ($this.hasClass('is-show')) {
        $('.js-about-accordion').removeClass('is-show');
        $this.removeClass('is-show');
        $this.next().slideUp();
      } else {
        $('.js-about-accordion').removeClass('is-show');
        $this.addClass('is-show');
        $('.about-accordion__content').slideUp();
        $this.next().slideDown();
      }
    });
  }
}
