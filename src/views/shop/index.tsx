import React, { useEffect, useState } from "react";
import { Styles } from "./styles";
import ProductBlock from "../../components/ProductBlock";
import Pagination from '@material-ui/lab/Pagination';
import usePagination from '../../hooks/usePagination';
import { default as dataMocked } from "./mock-test-data.json";
import Box from '@material-ui/core/Box';

const Shop: React.FC = (...props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState<Array<any>>(dataMocked);
  const [productsPerPage, setProductsPerPage] = useState<number>(15);
  const [count, setCount] = useState<number>(Math.ceil(data.length / productsPerPage));
  const paginationData = usePagination(data, productsPerPage);

  const handleChange = (e: any, p: number) => {
    setPageNumber(p);
    paginationData.jump(p);
  };

  useEffect(() => {
    function handleResize() {
      let stylesShopView = document.getElementById('styles-shop-view')
      if (stylesShopView){
        setProductsPerPage((Math.round(stylesShopView.getBoundingClientRect().width/150)-1)*3)
      }
    }
    window.addEventListener('resize', handleResize);
  }, [count]);

  useEffect(() => {
    let stylesShopView = document.getElementById('styles-shop-view')
    if (stylesShopView){
      let value = (Math.round(stylesShopView.getBoundingClientRect().width/150)-1)*3
      if (value > 8){
        value = 15
      }
      setProductsPerPage(value)
    }
  }, []);

  return (
    <Styles id='styles-shop-view'>
        <Box id='box-products' display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
          {paginationData.currentData().map((product, index) => {
            return (
              <ProductBlock index={index} name={product.name} specialPrice={400.00} price={product.price} imagePath={product.image} />
            );
          })}
        </Box>
        <Pagination id='pagination' count={count} page={pageNumber} onChange={handleChange} />

        {/* <ProductBlock index={1} name={'TÊNIS ADIDAS'} specialPrice={400.00} price={299.90} imagePath={'media/shoes-7.jpg'} /> */}
    </Styles>
  );
};

export default Shop;
