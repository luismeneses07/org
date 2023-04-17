import Card from "../Card/Card";
import "./Team.css";
import hexToRgba from 'hex-to-rgba';
const Team = ({ data, collaborators, deleteCollaborator, updateColor, like }) => {
  return (
    <>
      {collaborators.length > 0 && (
        <section
          className="team"
          style={{ backgroundColor: hexToRgba(data.PrimaryColor, 0.6) }}
        >
          <input
            type="color"
            className="team_color"
            value={data.PrimaryColor}
            onChange={(e) => {updateColor(e.target.value, data.id);}}
          />
          <h3 style={{ borderColor: data.PrimaryColor }}>{data.team}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, index) => (
              <Card
                key={index}
                data={collaborator}
                SecondaryColor={data.PrimaryColor}
                deleteCollaborator={deleteCollaborator}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
