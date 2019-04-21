'use strict';

import $ from 'jquery';

export default class CouncilImages {
  constructor() {
    $('.council-images__image, .council-images__title').on('click', function() {
      let $this = $(this),
        $parent = $this.closest('.council-images__item'),
        index = $parent.data('index'),
        $content = $(`.council-images__content[data-index="${index}"]`);

      let position = $this.position(),
        selectedIndex = $('.council-images__item').length - 1,
        previousIndex = null,
        hasOpen = $('.council-images__item.is-active').length == 1;

      $('.council-images__item').each(function(k) {
        if ($(this).position().top > position.top) {
          selectedIndex = k - 1;
          return false;
        }
      });

      if (hasOpen) {
        previousIndex = $('.council-images__item.is-active').data('index');
      }

      // console.table({hasOpen, previousIndex, index, selectedIndex});

      if (!$this.hasClass('is-active')) {
        $parent.addClass('is-active').siblings().removeClass('is-active');

        if (hasOpen) {
          $(`.council-images__content[data-index="${previousIndex}"]`).hide().appendTo(`.council-images__item[data-index="${previousIndex}"]`);
          $content.insertAfter(`.council-images__item[data-index="${selectedIndex}"]`).show();
        } else {
          $content.insertAfter(`.council-images__item[data-index="${selectedIndex}"]`).slideDown();
        }
      }
    });

    $('.js-next-council').on('click', function() {
      let $this = $(this),
        $parent = $this.closest('.council-images__content'),
        index = $parent.data('index') + 1;

      if (index > $('.council-images__item').length - 1) {
        index = 0;
      }

      $(`.council-images__item[data-index="${index}"] .council-images__image`).trigger('click');
    });
  }
}
