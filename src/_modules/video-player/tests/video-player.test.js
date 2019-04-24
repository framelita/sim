'use strict';

import VideoPlayer from '../video-player';

describe('VideoPlayer View', function() {

  beforeEach(() => {
    this.videoPlayer = new VideoPlayer();
  });

  it('Should run a few assertions', () => {
    expect(this.videoPlayer);
  });

});
