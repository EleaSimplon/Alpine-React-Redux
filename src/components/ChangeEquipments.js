import React from 'react';
import pure from './OptionPure';
import legend from './OptionLegend';
import {connect} from 'react-redux';
import CardEquipOption from './CardEquipOption';
import {Tabs, Tab} from 'react-bootstrap';
import RecapModal from './ModalRecapEquip';

const mapStateToProps = (state, ) => {
    return { OptionSelected: state.OptionSelected
    };
};

const ChangeEquipmentConnect = ({OptionSelected}) => {

    let data

    if (OptionSelected.name === 'A110 Pure') {
        data =  pure
    } else {
        data =  legend
    }

    const displayEquipement = () => {
     
        return Object.keys(data.equipments).map((index)=>{

            return(  
                   
                <Tab eventKey={data.equipments[index].category} title={data.equipments[index].category}>

                    <div className="d-flex justify-content-evenly">

                        {Object.keys(data.equipments[index].perso).map((list)=>{

                            return(

                                <CardEquipOption 
                                    type="equipments"
                                    element={data.equipments[index].perso[list]} 
                                    // id={data.equipments[index].perso[list].id} 
                                    name={data.equipments[index].perso[list].name} 
                                    description='' 
                                    price={data.equipments[index].perso[list].price} 
                                    img={data.equipments[index].perso[list].img} 
                                    group={index} 
                                />
                            )
                        })}                        

                    </div>

                </Tab>
            )   
        })
    }


    return (

        <div>
            <Tabs defaultActiveKey="Design" id="uncontrolled-tab-example" className="justify-content-center">
                {displayEquipement()}
            </Tabs>
            <RecapModal />
        </div>
    )
    
}

const ChangeEquipment =  connect(mapStateToProps)(ChangeEquipmentConnect);

export default ChangeEquipment;