import { useState } from 'react'
import FilteredTodos from './components/FilteredTodos.jsx'
import AddTodo from './components/AddTodo.jsx'
import FilterTodo from './components/FilterTodo.jsx'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <FilteredTodos/>
      <AddTodo />
      <FilterTodo />
    </RecoilRoot>
  )
}

export default App
