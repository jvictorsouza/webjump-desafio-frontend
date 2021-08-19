import React, { useContext } from 'react';
import { InLineSpacedList } from '../styles';
import { ThemeContext } from 'styled-components';
import { NavListOptions, NavListOptionsRoutes } from '../../../../../constants/constants';
import { HasThisRoute } from "../../../../../helpers/routes";
import { ToastError } from "../../../../../helpers/toast";
import { useNavigate } from "react-router-dom";

const ThirdRow: React.FC = () => {
    const { colors } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div id="ThirdRowHeader" style={{ width: "100%", maxHeight: "50px", backgroundColor: colors.two }}>
            <InLineSpacedList>
                {NavListOptions.map((option, index) => {
                    return (
                        <button key={`item-${option}`} onClick={() => {
                            HasThisRoute(option) ? navigate(NavListOptionsRoutes[option]) :
                                ToastError("Funcionalidade ainda não inserida")
                        }} >{option.toUpperCase()}</button>
                    )
                })}
            </InLineSpacedList>
        </div>
    );
}

export default ThirdRow;