import React, { useState, useRef, useCallback, useMemo } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


    
function createBulkTodos(){
  const array = [];
console.log(1)
  for(let i = 1; i<=2500; i++){
    array.push({
       id : i
       ,text : `할 일 ${i}`
       ,checked : false
    }) 
  }
  return array
}
 

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useMemo( 
    () => {
      console.log('insert')
      return (text) => {      
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos => todos.concat(todo));
        nextId.current += 1;  
      }      
    },[]
  );

  const onRemove = useMemo(
    () => {
      console.log('remove')
      return (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
      }
    },[]
  );

  const onToggle = useMemo(
    () => {
      console.log('toggle')
      return (id) => {
        setTodos(todos =>
          todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
        );
      }
    },[]
  );

  /* const onToggle = (id) => { 
      setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo) ) 
  } */

/*   const object = {
     foo : 'bar'
     ,value : 1
  }
   const nextOjb =  object;
   nextOjb.value = nextOjb.value + 1;
   console.log( nextOjb === object );
   console.log( nextOjb ,object ); */


   /* const obj2 = [ { id : 1 } , { id : 2 } ]
   const shwobj2 = [ ...obj2 ];

   console.log( obj2,shwobj2 , obj2 === shwobj2)
   console.log( obj2,shwobj2 , obj2[0] === shwobj2[0])
   shwobj2[0] = { id : 3 };
   console.log(  obj2[0] ,shwobj2[0] , obj2[0] === shwobj2[0] ) */



  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
