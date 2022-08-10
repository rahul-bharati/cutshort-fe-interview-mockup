const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn__main" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
