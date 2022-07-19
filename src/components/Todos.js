import React, { useState } from 'react';

// ⭐ 함수 하나당 컴포넌트 하나

// 💜 TodoList
const TodoList = ({ todos, onToggle }) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} />
                ))
            }
        </ul>
    )
}

// 💜 TodoItem
const TodoItem = ({ todo, onToggle }) => {
    return ( // 인수 있는 애는 바로 못씀
        <li onClick={() => onToggle(todo.id)}
        // style 삼항연산자
        style={ {color : todo.done ? 'red' : 'black'} }
        >{todo.text}</li>
    )
}

// 💜 Todos
const Todos = ({ todos, onCreate, onToggle }) => {
    const [ text, setText ] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefalu(); // submit 이벤트 발생했을 때 새로고침 방지
        onCreate(text);
        setText('');
    }
    console.log(todos);

    return (
        <div>
            <h3>Todos</h3>
            <form onSubmit={onSubmit}>
                <input value={text} type='text'
                placeholder="할 일 등록"
                onChange={onChange}
                />
                <button type='submit'>등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
};

export default Todos;