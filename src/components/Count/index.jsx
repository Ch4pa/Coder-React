

const Count = ({count, setCount}) => {
    

    const sumar = () =>{
        setCount(count + 1)
    } ;
    const Resetear = () =>{
        setCount(1)
    } ;
    const restar = () =>{
        if(count>1){
        setCount(count - 1)}
    } ;
  return (
    <div>
        <p>Contador:{count}</p>
        <button onClick={restar}>-</button>
        <button onClick={Resetear}>Reset</button>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default Count