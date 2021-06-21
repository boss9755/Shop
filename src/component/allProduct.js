import { useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { 
  makeStyles,
  Grid, 
  Paper, 
  Typography, 
  ButtonBase} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      margin: 'auto',
      maxWidth: 700,
      cursor:'pointer'
    },
    image: {
      width: 200,
      height: 200,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    header: {
      padding: 20,
      fontSize: 30,
      color: "black",
      textAlign:'center',
      fontFamily: "Courier New, Courier, monospace"
    },
    bg: {
      backgroundColor:"#f5f5f5"
    },
  }));

function ProductList() {
    const [product, setProduct] = useState([]);
    const classes = useStyles();
        useEffect(() => {
        axios
        .get(`http://localhost:5000/products`)
        .then((res) => {
            //console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className={classes.bg}>
            <div className={classes.header}> All Products </div>
            {product.map((data,id) => (
                <ProductDetail key={id} {...data}/>
            ))}
        </div>
    );
}

const ProductDetail = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const {id,desc, image, name, price} = props;
  const navigateToDetails = () => history.push(`/products/${id}`) 
  //console.log(props)
  return (
    <div className={classes.root}>
    <React.Fragment>
      <Grid item xs={12}>
        <Paper className={classes.paper} onClick={navigateToDetails}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={image}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={4} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                   {name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                   {desc}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{price} Baht</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <br/>
    </React.Fragment>
    </div>
    );
  }

export default ProductList