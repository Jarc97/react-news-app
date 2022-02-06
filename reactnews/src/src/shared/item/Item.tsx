import React, { FC } from "react";
import { isPropertySignature } from "typescript";

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
  }

  render() {
    return (
      <li>{ this.state.title } - { this.state.done ? 'DONE' : 'PENDING' }</li>
    )
  }
}

export default Item;