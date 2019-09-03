import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: []
    }
  }
  componentDidMount = async () => {
    await axios.get('https://api.github.com/users/danfrrr13')
      .then(res => {
        this.setState({ userData: res.data })
        console.log(res.data)
      })
      .catch(err => console.log('Error: ', err));

    axios.get('https://api.github.com/users/danfrrr13/followers')
      .then(res => {
        this.setState({ followers: res.data })
        console.log(res.data)
      })
      .catch(err => console.log('Error: ', err));
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <UserCard user={this.state.userData} followers={this.state.followers} />
      </div>
    );
  }
  
}

export default App;
