import React from 'react';
import './App.css';

import ImageList from './ImageList';



export default class App extends React.Component {

  render() {
    return (
      <div className='griddy'>
        <h1>Welcome to the Horned Creatures Gallery</h1>
        <ImageList />
      </div>


    );
  }

}