var React = require('react');

import Modal, {closeStyle} from 'simple-react-modal';
import PageIntro from '../partial/pageIntro';
import Gallery from '../ImageLayout/Gallery';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../Actions/reducer'
import {loadImages} from '../stores/loadImagePhoto';
import {watchForLoadImages} from '../stores/loadImagePhoto';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
// then run the saga
sagaMiddleware.run(watchForLoadImages)

import {Provider} from 'react-redux';


export default class PhotoHome extends React.Component{

  render(){
      const title = "Photography"
      const pageintro = "Landscapes, Animals, Natures and Concrete. This page showcases part of my enthusiasm for photography";

      return (
              <div>
                  <PageIntro title={title} pageintro={pageintro}> </PageIntro>
                  <Provider store={store}>
                  <Gallery />
                  </ Provider>
              </div>
      );
  }
}

module.exports = PhotoHome;
