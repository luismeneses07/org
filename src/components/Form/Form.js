import { useState } from "react";
import Button from "../Button/Button";
import CampText from "../CampText/CampText";
import ListOption from "../ListOption/ListOption";
import "./Form.css";
const Form = ({teams, registrerCollaborator, createTeam}) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    let dataSend = {
      name: name,
      job: job,
      photo: photo,
      team: team,
    };
    registrerCollaborator(dataSend);
  };

  const handleNewTeam = (e) => {
    e.preventDefault();
    createTeam({team: title, PrimaryColor: color});
  }
  return (
    <section className="forms">
      <form className="form" onSubmit={handleSend}>
        <h2 className="title">
          Rellena el formulario para crear el colaborador
        </h2>
        <CampText
          title="Nombre"
          place="Ingresa Nombre"
          required
          value={name}
          setvalue={setName}
        />
        <CampText
          title="Puesto"
          place="Ingresa Puesto"
          required
          value={job}
          setvalue={setJob}
        />
        <CampText
          title="Foto"
          place="Ingresa Url de Imagen"
          value={photo}
          setvalue={setPhoto}
        />
        <ListOption value={team} setTeam={setTeam} teams={teams}/>
        <Button text="Crear" />
      </form>
      <form className="form" onSubmit={handleNewTeam}>
        <h2 className="title">
          Rellena el formulario para crear el Equipo
        </h2>
        <CampText
          title="Titulo"
          place="Ingresa Titulo"
          required
          value={title}
          setvalue={setTitle}
        />
        <CampText
          title="Color"
          place="Ingresa Color en Hex"
          required
          value={color}
          setvalue={setColor}
          type="color"
        />
        <Button text="Registrar Equipo" />
      </form>
      
    </section>
  );
};

export default Form;
