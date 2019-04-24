'use strict';

import BannerNav from '../banner-nav';

describe('BannerNav View', function() {

  beforeEach(() => {
    this.bannerNav = new BannerNav();
  });

  it('Should run a few assertions', () => {
    expect(this.bannerNav);
  });

});
