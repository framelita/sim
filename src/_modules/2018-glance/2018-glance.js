'use strict';

import $ from 'jquery';
import slick from 'slick-carousel';

export default class Glance {
  constructor() {
    $('.glance__list').slick({
      slidesToShow: 3,
      infinite: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  }
}
