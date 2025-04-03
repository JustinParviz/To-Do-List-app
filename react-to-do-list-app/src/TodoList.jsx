import { TodoItem } from "./TodoItem"

export function TodoList({ todos }) {

    return (
        <ul className="list">
            {todos.length === 0 && "Currently No ToDos"}
            {todos.map(todo => {
                return (
                    <TodoItem {...todo} key={todo.id} />
                )
            })}
        </ul>
    )
}

