import '../App.css';

const Square = (props) => {
  return props.paintLine ?
  (
    <button 
      className="square paint-line" 
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  ) :
  (
    <button 
      className="square" 
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  ) 
}

export default Square