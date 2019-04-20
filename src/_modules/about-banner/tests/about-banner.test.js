'use strict';

import AboutBanner from '../about-banner';

describe('AboutBanner View', function() {

  beforeEach(() => {
    this.aboutBanner = new AboutBanner();
  });

  it('Should run a few assertions', () => {
    expect(this.aboutBanner);
  });

});
