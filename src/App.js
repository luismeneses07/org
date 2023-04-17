import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg/MiOrg";
import Team from "./components/Team/Team";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [collaborators, setColaboradors] = useState([   
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/luismeneses07.png",
      name: "Luis Florencio Meneses Flores",
      job: "Desarrollador",
      fav: true
    },
    {
      id: uuid(),
      team: "Programacion",
      photo: "https://github.com/genesysaluralatam.png",
      name: "Genesys Rondón",
      job: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructora en Alura Latam",
      fav: false
    },
  ]);

  const [teams, updateAllTeams] = useState([
    {
      id: uuid(),
      team: "Programacion",
      PrimaryColor: "#d9f7e9",
      SecundaryColor: "#57C278 ",
    },
    {
      id: uuid(),
      team: "Front End",
      PrimaryColor: "#e8f8ff",
      SecundaryColor: "#82cffa",
    },
    {
      id: uuid(),
      team: "Data Science",
      PrimaryColor: "#f0f8e2",
      SecundaryColor: "#a6d157",
    },
    {
      id: uuid(),
      team: "Devops",
      PrimaryColor: "#fde7e8",
      SecundaryColor: "#e06b69",
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      PrimaryColor: "#fae9f5",
      SecundaryColor: "#db6ebf",
    },
    {
      id: uuid(),
      team: "Movil",
      PrimaryColor: "#fff5d9",
      SecundaryColor: "#ffba05",
    },
    {
      id: uuid(),
      team: "Inovacion y Gestion",
      PrimaryColor: "#ffeedf",
      SecundaryColor: "#ff8a29",
    },
  ]);

  const handleChange = () => {
    setShowForm(!showForm);
  };

  const registrerCollaborator = (collaborator) => {
    //Spread operation
    setColaboradors([...collaborators, collaborator]);
  };

  const deleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter((collaborator) => {
      return collaborator.id !== id;
    });
    setColaboradors(newCollaborators);
  };

  const updateColor = (color, id) => {
    const updateTeams = teams.map((team) => {
      if (team.id === id) {
        team.PrimaryColor = color;
      }
      return team;
    });
    updateAllTeams(updateTeams);
  };

  const createTeam = (newTeam) => {
    updateAllTeams([...teams, {...newTeam, id: uuid()}])
  }

  const like = (id) => {
    const updateCollaborator = collaborators.map((collaborator) => {
      if(collaborator.id === id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator;
    })
    setColaboradors(updateCollaborator);
  }

  return (
    <div>
      <Header />
      {showForm ? (
        <Form
          teams={teams.map((team) => team.team)}
          registrerCollaborator={registrerCollaborator}
          createTeam={createTeam}
        />
      ) : (
        <></>
      )}
      <MiOrg handleChange={handleChange} />
      {teams.map((team) => (
        <Team
          key={team.team}
          data={team}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.team
          )}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
