import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headCount: 0, tailsCount: 0, ImgUrl: headImgUrl, message: ''}

  coinTossed = () => {
    const {headCount, tailsCount, message} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHead = headCount
    let latestTail = tailsCount
    let newMessage = message
    if (toss === 0) {
      tossImg = headImgUrl
      latestHead += 1
      newMessage = 'Heads'
    } else {
      tossImg = tailsImgUrl
      latestTail += 1
      newMessage = 'Tails'
    }
    this.setState({
      ImgUrl: tossImg,
      headCount: latestHead,
      tailsCount: latestTail,
      message: newMessage,
    })
  }

  render() {
    const {ImgUrl, headCount, tailsCount, message} = this.state
    const count = headCount + tailsCount

    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div>
            <img src={ImgUrl} className="image" alt="toss result" />
          </div>
          <p className="description">Click on the below Button</p>
          <button type="button" className="button" onClick={this.coinTossed}>
            Toss Coin
          </button>
          <h1 className="heading">{message}</h1>
          <div className="counting">
            <p className="description">Total: {count}</p>
            <p className="description">Heads: {headCount}</p>
            <p className="description">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
