import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
class App extends Component {
  state = {
    gifts: []
  }
  addGift = () => {
    const { gifts } = this.state
    const ids = gifts.map(gift => gift.id)
    const max_id = ids.legnth > 0 ? Math.max(...ids) : 0
    gifts.push({ id: max_id + 1 })

    this.setState({ gifts })
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App
