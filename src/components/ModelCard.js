import React from 'react';
import {Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectVersion } from "../actions";
import OptionPure from "./OptionPure";
import OptionLegend from "./OptionLegend";
import { Link } from "react-router-dom";


const ModelCardConnect = ({selectCarVersion}) => {

    function handleClick(option) {
        selectCarVersion(option)
    }

    return (

        <div className="card-container cards_landscape_wrap-2">

            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={OptionPure.default.img} />
                <Card.Body>
                    <Card.Title>{OptionPure.default.name}</Card.Title>
                    <Card.Text>
                        {OptionPure.default.description}
                    </Card.Text>
                    <Card.Text>
                       Starting from {OptionPure.default.price} $
                    </Card.Text>
                    <Link to="/colors">
                        <Button variant="primary" onClick={ () => handleClick(OptionPure) }>Personalize your car</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={OptionLegend.default.img} />
                <Card.Body>
                    <Card.Title>{OptionLegend.default.name}</Card.Title>
                    <Card.Text>
                        {OptionLegend.default.description}
                    </Card.Text>
                    <Card.Text>
                       Starting from {OptionLegend.default.price} $
                    </Card.Text>
                    <Link to="/colors">
                        <Button variant="primary" onClick={ () =>handleClick(OptionLegend) }>Personalize your car</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
        
        
    )
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCarVersion : (payload) => dispatch(selectVersion(payload))
    };
};


const ModelCard = connect(mapStateToProps, mapDispatchToProps)(ModelCardConnect);

export default ModelCard;