
import React from 'react'
import Item from '../shared/item/Item'

interface Props {
  title: string
}

interface State {
  items: string[]
}

const test_data = ['Arroz', 'Frijoles', 'Queso']

class ToDoListClass extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount()')

    this.setState({
      items: test_data
    })

    setTimeout(this.addItem.bind(this), 4000, 'Queso Crema')

    this.state.items.push('Asdf')
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate()')
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount()')
  }

  addItem(itemTitle: string): void {
    const items = this.state.items
    items.push(itemTitle)
    this.setState({ items })
  }

  displayItems() {
    return this.state.items.length > 0 ? (
      this.state.items.map((element) => (
        <Item title={element} />
      ))
    ) : (
      <h3>No items added yet.</h3>
    )
  }

  render() {
    console.log('render')

    return(
      <>
        <h4>Class Based To Do List</h4>
        <ul>
          { this.displayItems() }
        </ul>
      </>
    )
  }
}

export default ToDoListClass
