import React from 'react'
import "../cardBase/cardFeature.css"
import { Modal } from 'antd';

interface DataModal {
    img: string,
    title: string,
    content: string,
    openModal: boolean,
    setOpenModal: (v: boolean) => void;

}


const ModalLearnMore = (props: DataModal) => {
    const HandleCancle = () => {
        props.setOpenModal(false)
    }
    return (
        <Modal open={props.openModal}>

            <div style={{ display: "flex" }}>
                <img src={props.img} alt="icon"></img>
                <h4>{props.title}</h4>
            </div>


            <p>{props.content}
            </p>

        </Modal >

    )
}

export default ModalLearnMore