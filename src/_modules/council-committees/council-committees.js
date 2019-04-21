'use strict';

import $ from 'jquery';

export default class CouncilCommittees {
  constructor() {
    $('.council-committees__title').on('click', function() {
      let $this = $(this),
        $parent = $this.closest('.council-committees__item');

      if ($parent.hasClass('is-active')) {
        $parent.removeClass('is-active');
        $parent.find('.council-committees__content').slideUp();
      } else {
        $parent.addClass('is-active');
        $parent.find('.council-committees__content').slideDown();
      }
    });
  }
}
