'use strict';

import CouncilTable from '../council-table';

describe('CouncilTable View', function() {

  beforeEach(() => {
    this.councilTable = new CouncilTable();
  });

  it('Should run a few assertions', () => {
    expect(this.councilTable);
  });

});
