const Input = ({ type, placeholder, label, optionalText = "" }) => {
  return (
    <div className="input_group">
      <label className="input_group__label">
        {label} <span className="label-optional">{optionalText}</span>
      </label>
      {type === "text" ? (
        <input
          type={type}
          placeholder={placeholder}
          className="input_group__field"
        />
      ) : (
        <div className="url-input-group">
          <span className="url-input-link">www.eden.com/</span>
          <input
            type={type}
            placeholder={placeholder}
            className="url-input-field"
          />
        </div>
      )}
    </div>
  );
};

export default Input;
