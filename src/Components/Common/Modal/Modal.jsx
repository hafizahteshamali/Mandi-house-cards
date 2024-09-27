import "./Modal.css";
import { useParams } from "react-router";
import { CardData } from "../Card/CardData";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Modal = ({Modal, setModal, selectID}) => {
    const singleData = CardData.find((item)=>{
        return item.id == selectID;
    })
    const {title, price, description, imgUrl, firstImg} = singleData;

    const [isImg, setIsImg] = useState(firstImg)

    const changeImage = (url)=>{
        setIsImg(url);
    }
  return (
    <div className="container">
        <div className="ModalBox">
                <img src={isImg} alt="" />
                <div className="txt_wrapper">
                <h2>{title}</h2>
                <h5>{price}Rs</h5>
                <p>{description}</p>
                <div className="img-wrapper">
                    {imgUrl.map((item, index)=>{
                       return(
                        <>
                        <img key={index} className="chotiimg" onClick={()=>changeImage(item)} src={item} alt="" />
                        </>
                       )
                    })}
                </div>
                <button className="addtoCart">Add to Cart</button>
                <button className="closeBtn" onClick={()=>setModal(false)}>X</button>
                </div>
        </div>
    </div>
  )
}

export default Modal
