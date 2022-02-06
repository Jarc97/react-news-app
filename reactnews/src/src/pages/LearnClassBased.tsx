
import React from 'react'
import Item from '../shared/item/Item'

interface Props {
  // No props needed
}

interface State {
  items: Item[]
}

class ToDoList extends React.Component <Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = { items: [] }
  }

  componentDidMount() {
    console.log('componentDidMount()')

    const item1 = new Item({ title: 'Arroz' })
    const item2 = new Item({ title: 'Frijoles' })
    const item3 = new Item({ title: 'Queso' })

    this.state.items.push(item1)
    this.state.items.push(item2)
    this.state.items.push(item3)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }

  addItem(itemTitle: string): void {
    const items = this.state.items
    items.push(new Item({ title: itemTitle }))
    this.setState({ items })
  }

  render() {
    console.log('render')

    return(
      <ul>
        <Item title='Arroz'/>
        <Item title='Frijoles'/>
        <Item title='Queso'/>
      </ul>
    )
  }
}

export default ToDoList
