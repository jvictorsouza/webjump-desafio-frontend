import React, { useContext }  from 'react';
import { InLineLinksandTexts } from '../styles';
import { ThemeContext } from 'styled-components';

const FirstRow: React.FC = () => {
    const { colors } = useContext(ThemeContext);

    return(
        <div id="firstRowHeader" style={{width: "100%", display: "flex", backgroundColor: colors.zero}}>
            <InLineLinksandTexts>
                <button onClick={()=>{}} className="nav-link">Acesse sua Conta</button>
                <span>ou</span>
                <button onClick={()=>{}} className="nav-link">Cadastre-se</button>
            </InLineLinksandTexts>    
        </div>
    );
}

export default FirstRow;