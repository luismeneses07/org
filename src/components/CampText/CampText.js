import "./CampText.css";
const CampText = ({ title, place, required, value, setvalue, type }) => {
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  if(type === undefined){
    type ="text"
  }

  return (
    <div className={`Camp Camp-${type}`}>
      <label>{title}</label>
      <input
        placeholder={`${place}. . .`}
        required={required}
        value={value}
        onChange={handleChange}
        type= {type}
      />
    </div>
  );
};

export default CampText;
