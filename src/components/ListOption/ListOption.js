import "./ListOption.css";
const ListOption = ({value, setTeam, teams}) => {

  const handleChange = (e) => {
    setTeam(e.target.value)
  }
  return (
    <div className="list-option">
      <label>Equipo</label>
      <select value={value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
        {teams.map((team, index) => {
          return <option key={index} value={team}>{team}</option>;
        })}
      </select>
    </div>
  );
};

export default ListOption;
