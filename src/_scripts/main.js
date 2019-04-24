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
});
