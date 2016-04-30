import test from 'tape';
import {put, take} from 'redux-saga/effects'
import {watchForLoadImages, loadImages} from './loadImagePhoto';
import {fetchImages} from './srcPhoto';
import {fetchImageDesign} from './srcDesign';

test('watchForLoadImages', assert => {
  const generator = watchForLoadImages();

  assert.deepEqual(
      generator.next().value,
      false,
      'watchForLoadImages should be waiting for LOAD_IMAGES action'
    );

  assert.end();
});
