import logo from './logo.svg';
import './App.css';
//Redux와 React를 연결하는 데 필요한 Provider, useDispatch, useSelector를 import
import { Provider, useDispatch, useSelector } from 'react-redux';
//Redux 스토어를 import
// import store from './redux/store';
//액션 생성 함수를 import
//아래 함수들은 상태를 변경하는 액션을 dispatch하기 위해 사용된다.
import { increment, decrement } from './redux/actions';
import React,{useState} from 'react';
import { addTodo,removeTodo } from './Todo/actions';
import store from './Todo/store';

// function Counter(){
// //useSelector : Redux에서 store에 저장되어 있는 state를 읽어오는 hook
// const count = useSelector(state => state.count)

// //useDispatch : store에 action을 보낼 수 있는 hook
// const dispatch = useDispatch();
// return (
//   <div>
//     {/* 현재 state인 count값을 화면에 출력한다. */}
//    <h1>Counter : {count}</h1>
//    {/* Increment 버튼을 클릭하면 increment() 액션을 디스패치한다. */}
//    <button onClick={() => dispatch(increment())}>Increment</button>
//    <button onClick={() => dispatch(decrement())}>Decrement</button>
//   </div>
// );
// }


function App() {
  const [input, setInput] = useState(''); //입력값을 관리하는 state
  const todos = useSelector(state => state.todos);//redux에서 todos state를 가져옴
  const dispatch = useDispatch(); //액션을 dispatch하는 함수 가져오기

  //추가 버튼을 눌렀을 때 input태그에 있는 내용을 배열에 추가하기
  const handleAddTodo= () => {
    if(input.trim()){//input태그의 값이 비었는지 검사
      dispatch(addTodo(Date.now(), input))//id와 내용을 액션에 전송해서 dispatch가 리듀서로 전송
      setInput('')//입력창 비우기
    }
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id)); //Todo를 삭제

  }

  return(
  // Provider : store를 애플리케이션 전체에 제공
  // Provider 안에 있는 모든 컴포넌트는 store에 접근할 수 있다.
  <div>
    <h1>
      Todo List
    </h1>
    <input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder='Add a new todo'
    />
    <button onClick={handleAddTodo}>Add Todo</button>
    <ul>
      {todos.map(todo =>(
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default App;


//증가 혹은 감소 버튼을 누르면
//dispatch(액션 함수)가 실행이 되고 액션 함수를 통해 반환받은 객체를 리듀서 함수로 보낸다.

//increment()의 반환값 -> {type:'INCREMENT'}

//dispatch({type:'INCREMENT'}) 를 countReducer의 인자로 전달한다.
//리듀서에서 상태를 업데이트하면 재렌더링이 되고 화면에 바뀐 값이 출력된다.