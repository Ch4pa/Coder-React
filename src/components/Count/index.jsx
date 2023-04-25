const Count = ({ count, setCount }) => {
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <p>Cantidad:{count}</p>
      <button onClick={restar}>-</button>

      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Count;
