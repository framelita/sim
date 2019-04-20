// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Header from '../_modules/header/header';
import HomeBanner from '../_modules/home-banner/home-banner';

$(() => {
  new Header();
  new HomeBanner();
});
