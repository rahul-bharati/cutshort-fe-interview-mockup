const Input = ({ type, placeholder, label }) => {
  return (
    <div className="input_group">
      <label className="input_group__label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="input_group__field"
      />
    </div>
  );
};

export default Input;
