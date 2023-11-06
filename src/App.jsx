import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Todo_card from './CardBody';
import Todo_Success_Card from './CardVic'
function App() {
 const [card,SetCard]= useState([{id:1,title:"헬스가기",body: "레그프레스 5셋트", isDone:false}])
 const [title,SetTitle]= useState("")
 const [body,SetBody] = useState("")

const InputTitle = (event) =>{
  SetTitle(event.target.value)
  
   
}

const InputBody = (event) =>{
  SetBody(event.target.value)
  
}
const todo_Add = () =>{
  const new_Todo_Add = {
    id:card.length+1,
    title :title,
    body : body,
    isDone:false
    
  }
  SetCard([...card,new_Todo_Add])
  SetTitle("");
  SetBody("");
  
 }
 const DeleteBtn = (id) =>{
  const todo_Del = card.filter((item)=>item.id != id)
   SetCard(todo_Del)
   
 }
 const SuccessBtn = (id) => {
  console.log(card)

  const updatedCard = card.map((item) => {
    if (item.id === id) {
      return { ...item, isDone: true };
    }
  
    return item;
  });
  SetCard(updatedCard);
  
}

const ClickCancelBtn =(id) =>{
  const CancelCard = card.map((item) => {
    if (item.id === id) {
      return { ...item, isDone: false };
    }
  
    return item;
  });
  SetCard(CancelCard);
  
}
  return (
    <div className='todo_layout'>
      <header>To_DO_List</header>
      <div className='input_section'>
        <div className='input_row'>
          <div className='input_field'>
            제목 &nbsp;<input type="text" className="form-control" id="todo_title" value={title} onChange={(event)=>InputTitle(event)} />
          </div>
          <div className='input_field'>
            내용 &nbsp;<input type="text" className="form-control" id="todo_input" value={body} onChange={(event)=> InputBody(event)}/>
          </div>
          <div className='input_field'>
          <div className='button_seaction'>
          <button type="button" className="btn btn-outline-success"  onClick={todo_Add}>추가하기</button>
        </div>
        </div>
        </div>
       
      </div>
      <div className='todo_Working_Seaction'> 
        Working~~~~!
            <div className='todo_input_row'>
            {card
              .filter((item) => !item.isDone) // 완료되지 않은 카드만 필터링
              .map((item) => (
                <Todo_card
                  key={item.id}
                  todo_id={item.id}
                  todo_Title={item.title}
                  todo_Body={item.body}
                  is_Done={item.isDone}
                  clcilckDel={() => DeleteBtn(item.id)}
                  SuccessBtn={() => SuccessBtn(item.id)}
        />
      ))
    }
            </div>
            
      </div>
      <div className='todo_Done_Seaction'>
        Done~~~~~~~!
        <div className='todo_input_row'>
        {card
           .filter((item) => item.isDone)
           .map((item) => (
             <Todo_Success_Card
               key={item.id}
               todo_id={item.id}
               todo_Title={item.title}
               todo_Body={item.body}
               is_Done={item.isDone}
               clcilckDel={() => DeleteBtn(item.id)}
               clcilckCancel={()=>ClickCancelBtn(item.id)}
             />
           ))}
        
        </div>
    </div>
       
    </div>
  );
}

export default App;