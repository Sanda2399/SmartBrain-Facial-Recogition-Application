import './App.css';
// import Clarifai from 'clarifai';
import ImageLinkForm from './Components/ImageLinkForm/imagelinkform';
import Navigation from './Components/Navigation/navigation';
import Ranking from './Components/Ranking/ranking';
import React from 'react';

// const app = new Clarifai.App(
//   {
//     apiKey: '412dc614d4fc442585f824ce6c17cbd9'
//   }
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = (event) => {
    console.log("click");
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Ranking />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
}
export default App;