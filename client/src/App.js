import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    board: [],
    currentPlayer: ''
  };

  componentDidMount() {
    fetch(`http://localhost:3005/playgame`)
      .then(res => res.json())
      .then(response =>
        this.setState({
          message: response.message,
          board: response.board,
          currentPlayer: response.currentPlayer
        })
      )
      .catch(err => console.log(err));
  }

  play = column => {
    console.log('Click here', column);
  };

  render() {
    console.log(this.state.currentPlayer);
    return (
      <div>
        <div
          className="button"
          onClick={() => {
            this.initBoard();
          }}
        >
          New Game
        </div>
        <table>
          <thead />
          <tbody>
            {this.state.board.map((row, i) => (
              <Row key={i} row={row} play={this.play} />
            ))}
          </tbody>
        </table>
        <p className="current">{`Player ${this.state.currentPlayer}, Please place your token` }</p>
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

// Row component
const Row = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell key={i} value={cell} column={i} play={play} />
      ))}
    </tr>
  );
};

const Cell = ({ value, column, play }) => {
  let color = 'white';
  if (value === 1) {
    color = 'red';
  } else if (value === 2) {
    color = 'yellow';
  }

  return (
    <td>
      <div
        className="cell"
        onClick={() => {
          play(column);
        }}
      >
        <div className={color} />
      </div>
    </td>
  );
};

export default App;
