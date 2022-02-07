import React, { useEffect, useState } from 'react'
import Item from '../shared/item/Item'

interface Props {
  // No props needed
}

const ToDoListFunction = ({}: Props): JSX.Element => {
  const test_data = ['Arroz', 'Frijoles', 'Queso']
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    setItems(test_data)
  }, [])

  const displayItems = () => {
    return items.length > 0 ? (
      items.map((element) => (
        <Item title={element} />
      ))
    ) : (
      <h3>No items added yet.</h3>
    )
  }

  return (
    <>
      <h4>Functional To Do List</h4>
      <ul>
        { displayItems() }
      </ul>
    </>
  )
}

export default ToDoListFunction