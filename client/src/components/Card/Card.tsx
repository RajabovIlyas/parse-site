import React, {FC} from "react";
import {Product} from "../../types/product";
import {Rate} from "antd";
import {Card as CardStyle} from './style'
import {Link} from "react-router-dom";

const Card: FC<Product> = (props) => {

    return (
        <CardStyle href={props.url} target="_blank">
            <img className={'card-img'} height={200} src={props.img}/>
            <h4>Название: {props.name}</h4>
            <div className={'card-price'}>
                <Rate value={props.rate}/>
                <p>Цена: {props.price}</p>
            </div>
        </CardStyle>
    )
}

export default Card;
