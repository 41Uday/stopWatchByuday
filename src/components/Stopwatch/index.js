// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {minutes: 0, seconds: 0}
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  getSeconds = () => {
    const {seconds} = this.state

    if (seconds === 60) {
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
      this.setState({seconds: 0})
    } else if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  getMinutes = () => {
    const {minutes} = this.state
    if (minutes === 60) {
      this.setState({minutes: 0})
    } else if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  restartButton = () => {
    this.setState({minutes: 0})
    this.setState({seconds: 0})
    console.log('restart')
  }

  stopButton = () => {
    console.log('stop')

    clearInterval(this.timerId)
  }

  startButton = () => {
    console.log('start')
    this.timerId = setInterval(this.tick, 1000)
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="head-1">Stopwatch</h1>
          <div className="card-2">
            <div className="inner-card-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="img-1"
              />
              <h1 className="head-2">Timer</h1>
            </div>
            <h1 className="para">
              {this.getMinutes()}:{this.getSeconds()}
            </h1>
            <div className="inner-card-2">
              <button
                type="button"
                className="button-1"
                onClick={this.startButton}
              >
                Start
              </button>
              <button
                type="button"
                className="button-1 button-2"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="button-1 button-3"
                onClick={this.restartButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
