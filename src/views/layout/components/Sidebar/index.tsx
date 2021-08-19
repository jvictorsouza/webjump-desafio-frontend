import Box from '@material-ui/core/Box';
import { observer } from "mobx-react-lite";
import React, {
  useEffect, useLayoutEffect, useState
} from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { FilterOptions, FilterOptionsType, NavListOptions, NavListOptionsRoutes } from "../../../../constants/constants";
import { HasThisRoute } from "../../../../helpers/routes";
import { ToastError } from "../../../../helpers/toast";
import { useStores } from "../../../../hooks/useStores";
import { StrObjectArrayStr } from "../../../../interfaces";
import { ButtonList, ColorPicker, FilterCamp, HistoryRoutes, HomeStyles, ShopStyles, Styles } from "./styles";


const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { filterStore } = useStores()
  const location = useLocation();
  const [viewFilterOptions, setViewFilterOptions] = useState<StrObjectArrayStr>({});
  const [viewFilterTypeOptions, setViewFilterTypeOptions] = useState<Array<string>>([]);

  useLayoutEffect(() => {

  }, []);

  useEffect(() => {
    if (location.pathname !== '/home') {
      let indexRoute = Object.values(NavListOptionsRoutes).indexOf(location.pathname)
      let idView = Object.keys(NavListOptionsRoutes)[indexRoute]
      setViewFilterOptions(FilterOptions[idView])
      setViewFilterTypeOptions(FilterOptionsType[Object.keys(FilterOptions).indexOf(idView)])
    }
  }, [location]);

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
            {Object.keys(viewFilterOptions).map((option, index) => {
              return (
                viewFilterTypeOptions !== undefined && viewFilterTypeOptions !== null ? (
                  <>
                    <span key={`title-${option}`}>{option.toLocaleUpperCase()}</span>
                    {viewFilterTypeOptions[index] === 'list' ? (
                      viewFilterOptions[option].map((item, index) => {
                        return (
                          <li key={`item-${item}`}><ButtonList key={`button-${item}`} isActive={filterStore.filterOptions[option].includes(item)} onClick={() => { filterStore.updateFilterCamp(option, item) }} >{item}</ButtonList></li>
                        )
                      })
                    ) : (
                      <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" sx={{ maxWidth: '100%' }}>
                        {viewFilterOptions[option].map((color: string, index) => {
                          return (
                            <Box p={0.01}>
                              <ColorPicker key={`color_picker-${index}`} onClick={() => { filterStore.updateFilterCamp(option, color) }} color={color} isActive={filterStore.filterOptions[option].includes(color)} ></ColorPicker>
                            </Box>
                          )
                        })}
                      </Box>

                    )}
                  </>
                ) : (null)


              )
            })}
          </FilterCamp>
        </ShopStyles>
      )}
    </Styles>
  );
};
export default observer(Sidebar);
