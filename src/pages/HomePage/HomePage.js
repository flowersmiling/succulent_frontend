import React from "react";
import Carousel from "./Carousel";
import { GET_PRODUCTS } from "../../queries/productQueries";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ProductCard from "components/ProductCard";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import { Height } from "@mui/icons-material";
import { Typography } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import img from "assets/images/map.jpg";
import { Link } from "react-router-dom";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <>
      <Box
        sx={{
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    </>
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <Carousel />
      <Box padding={'20px'}>
      <Typography fontWeight={300} variant="h5">
        Featured Products
      </Typography>
      </Box>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(1, minmax(1, 2))", Height:"20px"}}>
          {!loading &&
            !error &&
            data.products.slice(0,3).map((product) => (
              <Grid container spacing={2} columns={12}>
              <Item xs ={4} lg={3}>
                <ProductCard key={product.id} product={product} />
              </Item>
              </Grid>
            ))}
        </Box>
      </Container>
      <Box padding={'20px'}>
      <Typography fontWeight={300} variant="h5">
        Featured Categories
      </Typography>
      </Box>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(1, minmax(1, 2))", Height:"20px"}}>
          {!loading &&
            !error &&
            data.products.slice(3,6).map((product) => (
              <Grid container spacing={2} columns={12}>
              <Item xs ={4} lg={3}>
                <ProductCard key={product.id} product={product} />
              </Item>
              </Grid>
            ))}
        </Box>
      </Container>
      <Box padding={7}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'flex-start'}}>
        <img src={img} height={200} width={300}/>
        <div>
        <h4>Store Hours</h4>
        <p>Monday-Friday: 1pm-6pm</p>
        <p>Saturday: 2pm-6pm</p>
        <p>Sunday: Closed</p>
        </div>
        <div>
          <h4>Store Location</h4>
          <p>774 Gordon Baker Rd</p>
          <p>North York, ON M2H 3B4</p>
           <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:info@whalesucculent.ca'}>
          info@whalesucculent.ca
          </Link> 

        </div>
          </div>
        
        
      </Box>
    </div>
  );
};

export default HomePage;
