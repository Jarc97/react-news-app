import React from "react";

interface Props {
  title: string
}

interface State {
  title: string
  done: boolean
}

class Item extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      title: this.props.title,
      done: false
    }

    // Bind function to this class
    this.clicked = this.clicked.bind(this)
  }

  clicked() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    return (
      <li onClick={this.clicked}>
        { this.state.title } - { this.state.done ? 'DONE' : 'PENDING' }
      </li>
    )
  }
}

export default Item;