import React from 'react';
import './App.css';
import Header from './Header';
import ImageList from './ImageList';
import MyHornedCreatures from './MyHornedCreatures.js';
import Footer from './Footer.js';


export default class App extends React.Component {

  render() {
    return (
      <div className='griddy'>
        <h1>Welcome to the Horned Creatures Gallery</h1>
        <Header />
        <ImageList />
        <MyHornedCreatures />
        <Footer />
      </div>


    );
  }

}