import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductBlock from "../../components/ProductBlock";
import { NavListOptionsRoutes } from "../../constants/constants";
import { ToastError } from "../../helpers/toast";
import { useStores } from "../../hooks/useStores";
import { ProductItems, Products } from '../../interfaces';
import { Styles } from "./styles";

const Shop: React.FC = (...props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<Array<ProductItems>>();
  const location = useLocation();
  const [idShopPageView, setIdShopPageView] = useState<number>(Object.values(NavListOptionsRoutes).indexOf(location.pathname));
  const [productsPerPage, setProductsPerPage] = useState<number>(15);
  const { filterStore } = useStores();
  const [count, setCount] = useState<number>(Math.ceil(data ? data.length / productsPerPage : 5));

  function currentData(data: Array<ProductItems> | undefined) {
    if (data) {
      const begin = (currentPage - 1) * productsPerPage;
      const end = begin + productsPerPage;
      return data.slice(begin, end);
    }
    else {
      return []
    }
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, count));
  }

  const handleChange = (e: any, p: number) => {
    setCurrentPage(p);
    jump(p);
  };

  useEffect(() => {
    function handleResize() {
      let stylesShopView = document.getElementById('styles-shop-view')
      if (stylesShopView) {
        let value = (Math.round(stylesShopView.getBoundingClientRect().width / 150) - 1) * 3
        if (value > 10 && value < 15) {
          value = 10
        }
        setProductsPerPage(value)
      }
      setCount(Math.ceil(data ? data.length / productsPerPage : 5))
    }
    window.addEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    function handleReload() {
      let stylesShopView = document.getElementById('styles-shop-view')
      if (stylesShopView) {
        let value = (Math.round(stylesShopView.getBoundingClientRect().width / 150) - 1) * 3
        if (value > 10 && value < 15) {
          value = 10
        }
        setProductsPerPage(value)
      }
      setCount(Math.ceil(data ? data.length / productsPerPage : 5))
    }
    window.addEventListener('load', handleReload);
    setIdShopPageView(Object.values(NavListOptionsRoutes).indexOf(location.pathname));
    setCount(Math.ceil(data ? data.length / productsPerPage : 5))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    setIdShopPageView(Object.values(NavListOptionsRoutes).indexOf(location.pathname))
    filterStore.clearAllFiltersCamp()
    setData(undefined)
    requestProducts();
    let stylesShopView = document.getElementById('styles-shop-view')
    if (stylesShopView) {
      let value = (Math.round(stylesShopView.getBoundingClientRect().width / 150) - 1) * 3
      if (value > 10 && value < 15) {
        value = 10
      }
      setProductsPerPage(value)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idShopPageView]);

  const requestProducts = async () => {
    await axios.get<Products>(`/api/V1/categories/${idShopPageView}`)
      .then(response => {
        setData(filterStore.filterData(response.data, Object.keys(NavListOptionsRoutes)[idShopPageView]))
        setCount(Math.ceil(response.data.items.length / productsPerPage))
      }).catch((error) => { ToastError("Erro na comunicação com o servidor.") })
  }

  return (

    <Styles id='styles-shop-view'>
      <Box id='box-products' display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
        {currentData(data).map((product, index) => {
          if (Object.keys(product['filter'][0])[0] === 'color') {
            if (filterStore.filterOptions['Cores'].includes(product.filter[0].color) || filterStore.filterOptions['Cores'].length === 0) {
              return (
                <ProductBlock key={index} index={index} name={product.name} specialPrice={Object.keys(product).includes('specialPrice') ? product.specialPrice : undefined} price={product.price} imagePath={product.image} />
              );
            }
          }
          else if (Object.keys(product['filter'][0])[0] === 'gender') {
            if (filterStore.filterOptions['Gênero'].includes(product.filter[0].gender) || filterStore.filterOptions['Gênero'].length === 0) {
              return (
                <ProductBlock key={index} index={index} name={product.name} specialPrice={400.00} price={product.price} imagePath={product.image} />
              );
            }
          }
          return null


        })}
      </Box>
      <Pagination id='pagination' count={count} page={currentPage} onChange={handleChange} />
    </Styles>
  );
};

export default observer(Shop);
