// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';

import Header from '../_modules/header/header';
import HomeBanner from '../_modules/home-banner/home-banner';
import BannerNav from '../_modules/banner-nav/banner-nav';
import AboutAccordion from '../_modules/about-accordion/about-accordion';
import CouncilImages from '../_modules/council-images/council-images';
import CouncilCommittees from '../_modules/council-committees/council-committees';
import SummaryBanner from '../_modules/summary-banner/summary-banner';
import CouncilTable from '../_modules/council-table/council-table';
import Glance from '../_modules/2018-glance/2018-glance';

$(() => {
  new Header();
  new HomeBanner();
  new BannerNav();
  new AboutAccordion();
  new CouncilImages();
  new CouncilCommittees();
  new SummaryBanner();
  new CouncilTable();
  new Glance();

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  if ($('section').length) {
    $(document).on('scroll', debounce(function() {
      $('section').each(function() {
        let $this = $(this),
          sectionTop = $this.offset().top,
          pageYOffset = window.pageYOffset,
          headerHeight = $('header').outerHeight();
        if (
          sectionTop < pageYOffset + headerHeight
          && sectionTop + $this.outerHeight() > pageYOffset + headerHeight
        ) {
          history.pushState(null, null, `#${$this.attr('id')}`);

          if ($('.js-banner-nav').length) {
            $(`.js-banner-nav[href="#${$this.attr('id')}"]`).addClass('is-active').siblings().removeClass('is-active');
          }
        }
      });
    }, 200));
  }
});
