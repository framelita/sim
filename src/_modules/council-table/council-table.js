'use strict';

import $ from 'jquery'

export default class CouncilTable {
  constructor() {
    $('.js-toggle-council-table').on('click', function() {
      let $this = $(this),
        $content = $this.next('.council-table__container');

      if ($this.hasClass('is-active')) {
        $this.removeClass('is-active');
        $content.slideUp();
      } else {
        $this.addClass('is-active');
        $content.slideDown();
      }
    });
  }
}
