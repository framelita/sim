'use strict';

import SummaryBanner from '../summary-banner';

describe('SummaryBanner View', function() {

  beforeEach(() => {
    this.summaryBanner = new SummaryBanner();
  });

  it('Should run a few assertions', () => {
    expect(this.summaryBanner);
  });

});
