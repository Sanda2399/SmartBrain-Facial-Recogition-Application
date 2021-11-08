import './App.css';
import ImageLinkForm from './Components/ImageLinkForm/imagelinkform';
import Navigation from './Components/Navigation/navigation';
import Ranking from './Components/Ranking/ranking';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Ranking />
        <ImageLinkForm />
      </div>
    );
  }
}
export default App;