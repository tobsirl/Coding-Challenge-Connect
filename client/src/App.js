import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '' 
  };

  componentDidMount() {
    fetch(`http://localhost:3005/playgame`)
      .then(res => res.json())
      .then(responce => console.log(responce))
      .then(data =>
        this.setState({
          message: data.message
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.message);
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
            {/* {this.state.board.map((row, i) => (
              <Row key={i} row={row} play={this.play} />
            ))} */}
          </tbody>
        </table>
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

// Row component
const Row = ({ row, play }) => {
  return (
    <tr>
      {/* {row.map((cell, i) => (
        <Cell key={i} value={cell} columnIndex={i} play={play} />
      ))} */}
    </tr>
  );
};

const Cell = ({ value, columnIndex, play }) => {
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
          play(columnIndex);
        }}
      >
        <div className={color} />
      </div>
    </td>
  );
};

export default App;
