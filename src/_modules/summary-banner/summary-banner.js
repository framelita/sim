'use strict';

import $ from 'jquery';

export default class SummaryBanner {
  constructor() {
    $('.js-summary-toggle').on('click', function() {
      let $this = $(this);

      if ($this.hasClass('is-active')) {
        $this.removeClass('is-active');
        $this.next().slideUp();
      } else {
        $this.addClass('is-active');
        $this.next().slideDown();
      }
    });
  }
}
