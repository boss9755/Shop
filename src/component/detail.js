import { useEffect, useState } from 'react'
import React from 'react';
import axios from 'axios'
import { 
    makeStyles,
    Grid, 
    Paper, 
    Typography, 
    ButtonBase} from '@material-ui/core';
import { useParams } from 'react-router-dom';
  
const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios
        .get(`http://localhost:5000/products/${id}`)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])
    const useStyles = makeStyles((theme) => ({
        paper: {
          padding: theme.spacing(3),
          margin: 'auto',
          maxWidth: 700,
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
    const classes = useStyles();
    return (
        <div className={classes.bg}>
            <div className={classes.header}>
                Products Detail
            </div>
        <React.Fragment>
            <br/>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={product.image}/>
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={4} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="h6">
                            {product.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {product.desc}
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{product.price} Baht</Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
        
        </div>
    );
};

export default ProductDetails