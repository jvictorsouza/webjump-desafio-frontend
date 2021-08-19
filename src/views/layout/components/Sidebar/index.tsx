import { observer } from "mobx-react-lite";
import React, {
  useEffect, useLayoutEffect
} from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { FilterOptions, FilterOptionsType, NavListOptions, NavListOptionsRoutes } from "../../../../constants/constants";
import { HasThisRoute } from "../../../../helpers/routes";
import { ToastError } from "../../../../helpers/toast";
import { useStores } from "../../../../hooks/useStores";
import { ColorPicker, ColorPickerCamp, FilterCamp, HistoryRoutes, HomeStyles, ShopStyles, Styles, ButtonList } from "./styles";


const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { filterStore } = useStores()
  const location = useLocation();

  useLayoutEffect(() => {

  }, []);

  useEffect(() => {
  }, []);
  const indexOptionsRoute = Object.values(NavListOptionsRoutes).indexOf(location.pathname)

  return (
    <Styles>
      {location.pathname === '/home' || location.pathname === '/' ? (
        <HomeStyles>
          {NavListOptions.map((option: string, index: number) => {
            return (
              <li key={`item-${option}`}>
                <button key={`button-${option}`} onClick={() => {
                  HasThisRoute(option) ? navigate(NavListOptionsRoutes[option]) :
                    ToastError("Funcionalidade ainda não inserida")
                }} >{option}</button>
              </li>
            )
          })}

        </HomeStyles>
      ) : (
        <ShopStyles>
          <HistoryRoutes>
            <span onClick={() => { navigate('/home') }} >Página inicial</span>
            <IoIosArrowForward size={14} />
            <span>{Object.keys(NavListOptionsRoutes)[indexOptionsRoute]}</span>
          </HistoryRoutes>
          <FilterCamp>
            <span>FILTRE POR</span>
            {Object.keys(FilterOptions).map((option, index) => {
              return (
                <>
                  <span key={`title-${option}`}>{option.toLocaleUpperCase()}</span>
                  {FilterOptionsType[index] === 'list' ? (
                    FilterOptions[option].map((item, index) => {
                      return (
                        <li key={`item-${item}`}><ButtonList key={`button-${item}`} isActive={filterStore.filterOptions[option].includes(item)} onClick={() => { filterStore.updateFilterCamp(option, item) }} >{item}</ButtonList></li>
                      )
                    })
                  ) : (
                    <ColorPickerCamp>
                      {FilterOptions[option].map((color: string, index) => {
                        return (
                          <ColorPicker key={`color_picker-${index}`} onClick={() => { filterStore.updateFilterCamp(option, color) }} color={color} isActive={filterStore.filterOptions[option].includes(color)} ></ColorPicker>
                        )
                      })}
                    </ColorPickerCamp>

                  )}
                </>

              )
            })}
          </FilterCamp>
        </ShopStyles>
      )}
    </Styles>
  );
};
export default observer(Sidebar);
