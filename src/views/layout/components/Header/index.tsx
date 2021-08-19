import React from 'react';
import { Styles } from './styles';
import FirstRow from './rows/firstRow';
import SecondRow from './rows/secondRow';
import ThirdRow from './rows/thirdRow';

const Header: React.FC = () => {
    return (
        <Styles>
            <FirstRow/>
            <SecondRow/>
            <ThirdRow/>
        </Styles>
    );
}

export default Header;