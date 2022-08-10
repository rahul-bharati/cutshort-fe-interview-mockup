const Subheading = ({ text, isLast }) => {
  return (
    <h2 className={`heading__sub ${isLast ? "margin-low" : ""}`}>{text}</h2>
  );
};

export default Subheading;
