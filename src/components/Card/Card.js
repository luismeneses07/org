import "./Card.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ data, SecondaryColor, deleteCollaborator, like }) => {
  return (
    <div className="Card">
      <AiFillCloseCircle className="delete" onClick={() => {deleteCollaborator(data.id)}}/>
      <div className="header" style={{ backgroundColor: SecondaryColor }}>
        <img src={data.photo} alt={data.name} />
      </div>
      <div className="info">
        <h4>{data.name}</h4>
        <h5>{data.job}</h5>
        {data.fav ? <AiFillHeart color="red" onClick={() => like(data.id)}/> :  <AiOutlineHeart onClick={() => like(data.id)}/> }
       
      </div>
    </div>
  );
};

export default Card;
