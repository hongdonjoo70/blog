import './Modal.css';

const Modal = (props) => {
  return (
    <div className='modal'>
        <h4 style={{ color: props.color }}>{props.title[props.titlenum]}</h4>
        <p>날짜</p>
        <p>상세내용</p>    
      <button onClick={() => {
        props.setModal(false);
      }}>창 닫기</button>        
    </div>
  )
}

export default Modal;
