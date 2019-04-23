'use strict';

import $ from 'jquery';

export default class CouncilImages {
  constructor() {
    $('.council-images__image, .council-images__title').on('click', function() {
      let $this = $(this),
        $container = $this.closest('.council-images'),
        $parent = $this.closest('.council-images__item'),
        index = $parent.data('index'),
        $content = $container.find(`.council-images__content[data-index="${index}"]`);

      let position = $this.position(),
        selectedIndex = $container.find('.council-images__item').length - 1,
        previousIndex = null,
        hasOpen = $container.find('.council-images__item.is-active').length == 1;

      $container.find('.council-images__item').each(function(k) {
        if ($(this).position().top > position.top) {
          selectedIndex = k - 1;
          return false;
        }
      });

      if (hasOpen) {
        previousIndex = $container.find('.council-images__item.is-active').data('index');
      }

      // console.table({hasOpen, previousIndex, index, selectedIndex});

      if (!$this.hasClass('is-active')) {
        $parent.addClass('is-active').siblings().removeClass('is-active');

        if (hasOpen) {
          $container.find(`.council-images__content[data-index="${previousIndex}"]`).hide().appendTo($container.find(`.council-images__item[data-index="${previousIndex}"]`));
          $content.insertAfter($container.find(`.council-images__item[data-index="${selectedIndex}"]`)).show();
        } else {
          $content.insertAfter($container.find(`.council-images__item[data-index="${selectedIndex}"]`)).slideDown();
        }
      }
    });

    $('.js-next-council').on('click', function() {
      let $this = $(this),
        $container = $this.closest('.council-images'),
        $parent = $this.closest('.council-images__content'),
        index = $parent.data('index') + 1;

      if (index > $container.find('.council-images__item').length - 1) {
        index = 0;
      }

      $container.find(`.council-images__item[data-index="${index}"] .council-images__image`).trigger('click');
    });

    $('.js-close-council').on('click', function() {
      let $this = $(this),
        $container = $this.closest('.council-images'),
        previousIndex = $container.find('.council-images__item.is-active').data('index');

      $container.find('.council-images__item').removeClass('is-active');
      $container.find(`.council-images__content[data-index="${previousIndex}"]`).slideUp(400, function() {
        $(this).appendTo($container.find(`.council-images__item[data-index="${previousIndex}"]`));
      })
    });
  }
}
