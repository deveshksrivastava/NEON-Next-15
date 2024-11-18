'use client'
import { useState } from "react"
import { InputText } from 'primereact/inputtext';
const todos = [
  {
    checked: false,
    text: "Todo 1"
  },
  {
    checked: false,
    text: "Todo 2"
  },
  {
    checked: false,
    text: "Todo 3"
  }
]

type IType = {
  checked: boolean,
  text: string
}
export default function page() {
  const [add, setAdd] = useState(todos)
  const [completSet, setCompletSet] = useState<IType[]>([])
  const [text, setText] = useState("")

  const addHandler = () => {
    setAdd([...add, {
      checked: false,
      text: text
    }])
  }

  const deleteHandler = (id: number) => {
    const result = add.filter((todo, index) => {
      return index !== id
    })
    setAdd(result)

    // Deleted Item
    const resultComplete = add.filter((todo, index) => {
      return index === id
    })
    setCompletSet([...completSet, ...resultComplete])
  }

  const handleChecked = (index: number) => {
    console.log('index', index)
    const result = add.map((todo, i) => {
      if (i === index) {
        todo.checked = !todo.checked
      }

      return todo;
    })
    console.log('todo', result)

    setAdd(result)
  }

  const checkedCount = todos.reduce((count: any, item) => {
    return item.checked ? count + 1 : count
  }, 0)
  return (
    <div className="flex flex-col items-center justify-center py-2 ">
      <h1 className="text-2xl font-bold pt-14">Todo Do</h1>
      <div>
        {/* <InputText placeholder="Enter a value" /> */}
      </div>
      <div className="flex gap-6 pt-10">
        <input type="text" placeholder="Add Todo" className="border border-black" onChange={(e) => setText(e.target.value)} />
        <span className="border border-black ml-2 w-16 flex items-center justify-center bg-fuchsia-400" onClick={addHandler}>+</span>
      </div>
      <br />
      {
        add && add.map((todo, index) => {
          return (
            <div className="flex gap-20 border border-black p-2 " key={index}>
              <input type="checkbox" checked={todo.checked} onChange={() => handleChecked(index)} />
              <div key={index} className={todo.checked ? "line-through" : ""} >{todo.text}</div>
              <span className="border border-black ml-2 w-16 flex items-center justify-center bg-fuchsia-400" onClick={() => deleteHandler(index)}>delete</span>
            </div>
          )
        })
      }

      <div className="flex gap-6 pt-10">
        <div>Total Task : {add.length}</div>
        <div>Completed Task : {checkedCount}</div>
      </div>
      {
        completSet && completSet?.map((todo: any, index) => {
          return (
            <div className="flex gap-20 border border-black p-2 " key={index}>
              <input type="checkbox" checked={todo.checked} onChange={() => handleChecked(index)} />
              <div key={index} className={todo.checked ? "line-through" : ""} >{todo.text}</div>
            </div>
          )
        })
      }
    </div>
  )
}
