import React, { useContext }  from 'react';
import { InLineSpaceBetween } from '../styles';
import { ThemeContext } from 'styled-components';
import { Assets } from '../../../../../helpers/assets';
import { Input } from "reactstrap";

const SecondRow: React.FC = () => {
    const { colors } = useContext(ThemeContext);

    return(
        <div id="secondRowHeader" style={{width: "100%", backgroundColor: colors.one}}>
            <InLineSpaceBetween>
                <img alt='LogoHeader' src={Assets("/assets/images/logo.jpg")} height="50px" width="150px"/>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Input/>
                    <button>BUSCAR</button>
                </div>
            </InLineSpaceBetween>    
        </div>
    );
}

export default SecondRow;