const Radio = ({ icon, title, description, selected, onChange, value }) => {
  return (
    <div
      className={`radio-container ${
        selected === value ? "radio-container-selected" : ""
      }`}
      onClick={() => {
        onChange(value);
      }}
    >
      <div className="icon-container">{icon}</div>
      <div className="title-container">{title}</div>
      <div className="description-container">{description}</div>
    </div>
  );
};

export default Radio;
