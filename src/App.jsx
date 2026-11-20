import './App.css'
import { useState } from 'react';
import Modal from './Modal.jsx';

function App() {
  let post= ['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']
  const style ={
    color: 'blue',
    fontSize: '30px'
  }
  const [title, setTitle] = useState(['경기도', '서울시', '인천시']);
  const [click, setClick] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [titlenum, setTitlenum] = useState(0);
  const [input, setInput] = useState('');

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>React Blog</h4>
        </div>
        <h4 style={style}>{post[0]}</h4>
        <h4 style ={{color: 'red', fontSize: '20px'}}>{post[1]}</h4>
        <h4 style ={{color: 'green', fontSize: '16px'}}>{post[2]}</h4>
        <div className="list">
          {           
          title.map((item, index) => {
            return (
              <div className="list" key={index}>
                <h4>{item} <span onClick={() => {
                  let copy = [...click];
                  copy[index] += 1;
                  setClick(copy);
                  setModal(true);
                  setTitlenum(index);
                }}>👍</span> {click[index]}</h4>   

                <p>2월 17일 발행</p>

                <button onClick={() => {
                  let copy = [...title];
                  copy[index] = '부산시';
                  setTitle(copy);
                }}>제목변경</button> 

                <button onClick={() => {
                  let copy = [...title];
                  copy.splice(index, 1);
                  setTitle(copy);
                  let copy2 = [...click];
                  copy2.splice(index, 1);
                  setClick(copy2);
                }}>삭제</button> 
               </div>
            )
           })
          }
        </div>         
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
        <button onClick={() => {
          let copy = [...title];
          let copy2 = [...click];
          copy2.unshift(0);
          setClick(copy2);    
          copy.unshift(input);          
          setTitle(copy);
          setInput('');
        }}>추가</button>
        {
          modal == true ? <Modal title={title} setModal={setModal}titlenum={titlenum} color="red" /> : null
        }  
      </div>
    </>
  )
}

export default App

