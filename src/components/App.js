import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import { max_number } from '../helper/index'

class App extends Component {
  state = {
    gifts: []
  }
  addGift = () => {
    const { gifts } = this.state
    const ids = gifts.map(gift => gift.id)

    gifts.push({ id: max_number(ids) + 1 })

    this.setState({ gifts })
  }
  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)
    this.setState({
      gifts
    })
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <div className="gift-list">
          {this.state.gifts.map(gift => (
            <Gift gift={gift} removeGift={this.removeGift} key={gift.id} />
          ))}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App
