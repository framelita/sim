// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Header from '../_modules/header/header';

$(() => {
  new Header(); // Activate Header modules logic
  console.log('Welcome to Yeogurt!');
});
