'use strict';

import CouncilImages from '../council-images';

describe('CouncilImages View', function() {

  beforeEach(() => {
    this.councilImages = new CouncilImages();
  });

  it('Should run a few assertions', () => {
    expect(this.councilImages);
  });

});
