import './App.css';
import Clarifai from 'clarifai';
import ImageLinkForm from './Components/ImageLinkForm/imagelinkform';
import Navigation from './Components/Navigation/navigation';
import Ranking from './Components/Ranking/ranking';
import React from 'react';
import FacialRecogition from './Components/FacialRecogition/facialrecogition';
import SignIn from './Components/SignInForm/signin';
import Register from './Components/RegisterForm/register';

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
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
  }

  ///////// Functions /////////
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('FR_main-img');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceLocation = (boxInfo) => {
    this.setState({box : boxInfo})
  };

  onPictureSubmit = () => {
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
        if (response)
        {
          fetch('http://localhost:3000/image', 
          {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}))
            })
        }
        this.displayFaceLocation(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({route: route});
  };

  routeChangeAndTrue = (route) => {
    this.onRouteChange(route);
    this.setState({isSignedIn: true});
  }

  routeChangeAndFalse = (route) => {
    this.onRouteChange(route);
    this.setState({isSignedIn: false});
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  ///////// Main Render Function /////////
  render() {
    return (
      <div className="App">
        <Navigation routeChangeAndTrue={this.routeChangeAndTrue} routeChangeAndFalse={this.routeChangeAndFalse} isSignedIn={this.state.isSignedIn}/>
        {
          this.state.route === 'home' ? 
          <div>
            <Ranking UserName={this.state.user.name} UserEntries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
            <FacialRecogition imageURL={this.state.imageURL} box={this.state.box} />
          </div> :
          (
            this.state.route === 'signin' 
            ? <SignIn routeChangeAndTrue={this.routeChangeAndTrue} routeChangeAndFalse={this.routeChangeAndFalse} loadUser={this.loadUser}/>
            : <Register routeChangeAndTrue={this.routeChangeAndTrue} routeChangeAndFalse={this.routeChangeAndFalse} loadUser={this.loadUser}/>
          )
        }
      </div>
    );
  }
}

export default App;