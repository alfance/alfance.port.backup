var React = require('react');

import Modal, {closeStyle} from 'simple-react-modal';
import PageIntro from '../partial/pageIntro';
import Gallery from '../ImageLayout/Gallery';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {loadImagePhoto} from '../stores/loadImagePhoto';
import reducer from '../Actions/reducer'
import {watchForLoadDesign} from '../stores/loadImagePhoto';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
// then run the saga
sagaMiddleware.run(watchForLoadDesign)

import {Provider} from 'react-redux';

export default class DesignHome extends React.Component{
      render(){
        const title = "Graphic Design"
        const pageintro = "This page showcases my short-term graphic designs. Most of the projects were completed between tens of minutes to a day. Instead of thoughtful planning and pre analysis, works seen here are more of my artistic expression of the design world.";

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

module.exports = DesignHome;
