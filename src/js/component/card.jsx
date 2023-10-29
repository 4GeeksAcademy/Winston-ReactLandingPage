import React from "react";
import PropTypes from "prop-types";

const style = {
    'width': '18rem'
}

const imgStyle = {
    'width': '280px',
    'height': '250px',
    'margin': 'auto'
}


const Card = (props) => {
    return (
        <div class="card" style={style}>
            <img src={props.imageUrl} class="card-img-top" style={imgStyle} alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href={props.buttonUrl} class="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
};

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
};

export default Card;