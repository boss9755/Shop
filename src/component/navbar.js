import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory, useLocation} from "react-router-dom";
import './index.css'
import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import queryString from 'query-string'

function Navbar() {
    const [product, setProduct] = useState([]);
    const { search } = useLocation()
    const { category } = queryString.parse(search)
    const history = useHistory();
    const filterProductsByCategory = () => {
        history.push(`/products?category=${category}`)
    }
    console.log(category);
    useEffect(() => {
        axios
        .get(`http://localhost:5000/products?category=${category}`)
        .then((res) => {
            //console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [category])
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        title: {
          flexGrow: 1,
          marginTop:30,
          marginLeft:30,
        },
        bg: {
            backgroundColor:"black",
            height:100,
        },
      }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.bg} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Products</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="">Headphone</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Watch</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Lotion</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Footwear</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Camera</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Nature</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Eyeglass</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Computer</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="a" to="/">Book</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
      </div>
    )
}
export default Navbar