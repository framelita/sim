'use strict';

import CorporateInformation from '../corporate-information';

describe('CorporateInformation View', function() {

  beforeEach(() => {
    this.corporateInformation = new CorporateInformation();
  });

  it('Should run a few assertions', () => {
    expect(this.corporateInformation);
  });

});
