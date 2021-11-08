import './App.css';
import Clarifai from 'clarifai';
import ImageLinkForm from './Components/ImageLinkForm/imagelinkform';
import Navigation from './Components/Navigation/navigation';
import Ranking from './Components/Ranking/ranking';
import React from 'react';
import FacialRecogition from './Components/FacialRecogition/facialrecogition';

///////// Variables /////////
const app = new Clarifai.App(
  {
    apiKey: '412dc614d4fc442585f824ce6c17cbd9'
  }
);


///////// Main /////////
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    };
  }

  ///////// Functions /////////
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = (event) => {
    this.setState({imageURL: this.state.input});

    // Used for calling Clarifai Face Detection AI Model
    app.models.initModel({
        id: Clarifai.FACE_DETECT_MODEL,
      })
      .then((faceDetectModel) => {
        return faceDetectModel.predict(
          this.state.input
        );
      })
      .then((response) => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      });
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Ranking />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FacialRecogition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;