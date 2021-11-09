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
      imageURL: '',
      box: {}
    };
  }

  ///////// Functions /////////
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('FR_main-img');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width);
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceLocation = (boxInfo) => {
    this.setState({box : boxInfo})
    console.log(boxInfo);
  }

  onButtonSubmit = () => {
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
      .then(response => {

        this.displayFaceLocation(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Ranking />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FacialRecogition imageURL={this.state.imageURL} box={this.state.box} />
      </div>
    );
  }
}

export default App;