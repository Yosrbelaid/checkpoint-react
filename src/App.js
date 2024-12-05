import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Yosr Belaid',
        bio: 'A passionate software developer.',
        imgSrc: 'https://i.pinimg.com/736x/30/f2/3c/30f23c4db8e72dff05acb4fb076cd22d.jpg',
        profession: 'Software Engineer',
      },
      shows: false, 
      timeElapsed: 0, 
    };
    this.timer = null; 
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000); 
  }


  componentWillUnmount() {
    clearInterval(this.timer);
  }


  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profile Toggle</h1>

        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>Profession:</strong> {profession}</p>
          </div>
        )}

        <div className="timer">
          <p>Time since component was mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;


