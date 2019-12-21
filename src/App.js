import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
    </>
  )
}

class Cat extends React.Component {

  constructor() {
    super();
    this.state = { number: 0, image: " " };

  }

  async componentDidMount() {
    const req = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await req.json();
    this.setState({ image: data[0].url });
  }

  // https://api.thecatapi.com/v1/images/search
  render() {
    return (<div >

      <div className="cats">
        <img src={this.state.image} width="480px" />
      </div>


      <button onClick={() => { this.setState({ number: this.state.number + 1 }) }}>
        +
    </button>
      <button onClick={() => { this.setState({ number: this.state.number - 1 }) }}>
        -
    </button>
      <p>
        number: {this.state.number}
      </p>
    </div>
    );
  }
}

export default App;