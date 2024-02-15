import React from 'react'
import TodoAppComponent from './components/TodoAppComponent'

const TodoListPage = () => {
  return (
    <section className=' bg-slate-100 min-h-[100vh] flex items-center justify-center md:py-9'>
      <TodoAppComponent />
    </section>
  )
}

export default TodoListPage