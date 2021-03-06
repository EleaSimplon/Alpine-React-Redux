import React from 'react';
import pure from './OptionPure';
import legend from './OptionLegend';
import {connect} from 'react-redux';
import CardOption from './CardOption';

const mapStateToProps = (state, ) => {
    return { OptionSelected: state.OptionSelected
    };
};


const ChangeSaddleryConnect = ({OptionSelected}) => {

    let data
    
    if (OptionSelected.name === 'A110 Pure') {
        data =  pure
    } else {
        data =  legend
    }

    console.log(data);

    return (

        <div>
            
                <div className="d-flex justify-content-around">
                    {Object.keys(data.saddlery).map((key)=>{

                        return <CardOption 
                            type="saddlery"
                            link='equipments'
                            element={data.saddlery[key]}
                            name={data.saddlery[key].name}
                            description=''
                            price={data.saddlery[key].price}
                            img={data.saddlery[key].img}
                        />

                    })}
                </div>
        </div>
  )
}
  
const ChangeSaddlery =  connect(mapStateToProps)(ChangeSaddleryConnect)

export default ChangeSaddlery;