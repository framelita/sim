'use strict';

import OrganisationChart from '../organisation-chart';

describe('OrganisationChart View', function() {

  beforeEach(() => {
    this.organisationChart = new OrganisationChart();
  });

  it('Should run a few assertions', () => {
    expect(this.organisationChart);
  });

});
