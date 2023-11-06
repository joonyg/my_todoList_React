1.분리한 컴포넌트

-> const Todo_Success_Card =(item) =>{
return(

<div key={item.id} className='todo_Card_Style'>
<div className="component-style">
<h3>{item.todo_Title}</h3>
<div className='todo_input_todo'>
{item.todo_Body}
</div>
<div className='todo_btn'>
<button type="button" className="btn btn-outline-primary" id="todo_success"onClick={()=>item.SuccessBtn(item.todo_id)}>완료</button>
<button type="button" className="btn btn-outline-danger" id='todo_delete' onClick={() =>item.clcilckCancel(item.todo_id)}>취소</button>
</div>
{item.body}
</div>
</div>
)
}
-----------------------------------------------------------------------------------------------------------------------------------------
export default Todo_Success_Card;

const Todo_card = (item) => {

    return (
      <div key={item.id} className='todo_Card_Style'>
        <div className="component-style">
          <h3>{item.todo_Title}</h3>
          <div className='todo_input_todo'>
          {item.todo_Body}
          </div>
          <div className='todo_btn'>
            <button type="button" className="btn btn-outline-primary" id="todo_success"onClick={()=>item.SuccessBtn(item.todo_id)}>완료</button>
            <button type="button" className="btn btn-outline-danger" id='todo_delete' onClick={() =>item.clcilckDel(item.todo_id)}>삭제</button>
          </div>
          {item.body}
        </div>
      </div>
    )

}

export default Todo_card;
