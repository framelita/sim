'use strict';

import $ from 'jquery';

export default class AboutAccordion {
  constructor() {
    $('.js-about-accordion').on('click', function() {
      let $this = $(this);

      $('.js-about-accordion').removeClass('is-show');
      $this.addClass('is-show');
    });
  }
}
