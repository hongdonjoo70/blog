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
                }}>👍</span> {click[index]}</h4>   

                <p>2월 17일 발행</p>

                <button onClick={() => {
                  let copy = [...title];
                  copy[index] = '부산시';
                  setTitle(copy);
                }}>제목변경</button>                
               </div>
            )
           })
          }
        </div> 
        <button onClick={() => {setModal(!modal)}}>열고닫기</button>
        {
          modal == true ? <Modal/> : null
        }  
      
      </div>
    </>
  )
}

export default App

