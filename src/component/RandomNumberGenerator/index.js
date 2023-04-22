import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  generateNumber = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({randomNum: prevState.randomNum + random}))
    console.log(random)
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="para">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
