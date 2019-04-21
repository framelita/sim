'use strict';

import CouncilCommittees from '../council-committees';

describe('CouncilCommittees View', function() {

  beforeEach(() => {
    this.councilCommittees = new CouncilCommittees();
  });

  it('Should run a few assertions', () => {
    expect(this.councilCommittees);
  });

});
