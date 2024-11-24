'use client'
import { useState } from "react"
import { InputText } from 'primereact/inputtext';
import { handleSignOut } from "@/app/actions/authActions";
import { set } from "mongoose";
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

      <hr />
      <Newform1 />
      <Newform />
    </div>
  )
}

type IUsers = {
  name: string,
  age: string
}

// how to create a new form
// 1. Have a object of useState as users
// 2. adding input type=text, name=age, value=users.age, onChange=handleChange
// 3. At onChange hanlder, adding destructure i.e const {name, value} = e.target
// 4. set the value in users object, i.e seUsers({...users, [name]: value})
// 5. adding input type=submit, onClick=handleSubmit, add setUsersArray([...usersarray, users]);
function Newform1() {
  const [users, setUsers] = useState<IUsers>({ name: "", age: "" });
  const [usersarray, setUsersArray] = useState<IUsers[]>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = () => {
    console.log(users);
    setUsersArray([...usersarray, users]);
  };
  return (
    <div>
      <h1>Registration form</h1>
      <input type="text" name="name" value={users.name} onChange={handleChange} placeholder="enter Name" />
      <input type="text" name="age" value={users.age} onChange={handleChange} placeholder="enter Age" />
      <input type="submit" onClick={handleSubmit} /><br />
      {JSON.stringify(usersarray, null, 2)}
    </div>
  );
}



interface MyIUsers {
  name: string,
  email: string,
  password: string
}
const Newform = () => {
  const [users, setUsers] = useState<MyIUsers>({ name: "", email: "", password: "" })
  const [results, setResults] = useState<MyIUsers[]>([])

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value })
  }

  // setFavColor('Green'); // single update
  // setCount((prevCount) => prevCount + 2); // no {}, as no object and single valye, This is useful when the new state depends on the current state

  // Batching State Updates: perform multiple state updates in sequence
  // setCount((prevCount) => prevCount + 1);
  // setCount((prevCount) => prevCount + 2);

  //4. Object State: 
  // setLanValues({ ...lan, language: 'Marathi' }); // use {} as this is object
  // setUser((pre)=>({...pre, age: pre.age +1})) // 1 liner withot return
  // setUser((pre) => {                          // 2 liner with return
  //   return { ...pre, age: pre.age + 1 };
  // });

  const handleSubmit = () => {
    console.log('users', users)
    // setUsers(users);
    setResults([...results, users])
    setUsers({ name: "", email: "", password: "" })
  }



  return (
    <div className="flex flex-col items-center justify-center py-2 bg-slate-600">
      <h1 className="text-2xl font-bold pt-14">Multiple Input Form</h1>
      <span className="border border-black ml-2 w-16 flex items-center justify-center bg-fuchsia-400" onClick={handleSubmit}>Submit</span>
      <div className="flex gap-6 pt-10">
        <input type="text" name="name" value={users.name} onChange={changeHandler} placeholder="name" className="border border-black" />
        <input type="text" name="email" value={users.email} onChange={changeHandler} placeholder="email" className="border border-black" />
        <input type="text" name="password" value={users.password} onChange={changeHandler} placeholder="password" className="border border-black" />
      </div >
      <div>
        {JSON.stringify(users)}
        {JSON.stringify(results)}
      </div>

      {
        results.map((user, index) => {
          return (
            <div className="grid grid-cols-4 gap-4 border-2 border-black w-24 ">
              <div key={index}>{user.name}</div>
              <div key={index}>{user.email}</div>
              <div key={index}>{user.password}</div>
            </div>
          )
        })
      }
      <br />
    </div >
  )
} 