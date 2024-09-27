import "./Card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardData } from "./CardData";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Cards = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardId = (id) =>{
    setSelectedCardId(id);
    setIsModal(true);
  }

  return (
    <div className="container">
      <div className="Card-wrapper">
        {CardData.map((item)=>{
            return(
                <Card key={item.id} style={{ width: "24%" }}>
            <Card.Img variant="top" src={item.imgUrl[0]}  style={{ aspectRatio: "2/2" }}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Button onClick={()=>handleCardId(item.id)} className="cardBtn">view Details</Button>
            </Card.Body>
          </Card>
            )
        })}
        {isModal && <Modal Modal={isModal} selectID={selectedCardId} setModal={setIsModal} />}
      </div>
    </div>
  );
};

export default Cards;
