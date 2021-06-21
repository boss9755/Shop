import React from "react";
import { Link, useHistory, useLocation} from "react-router-dom";
import './index.css'
import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import queryString from 'query-string'

function Navbar() {
    const { search } = useLocation()
    const { category } = queryString.parse(search)
    const history = useHistory();
    const filterProductsByCategory = (category) => {
        history.push(`/products?category=${category}`)
    }
    console.log(category)
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        title: {
          flexGrow: 1,
          marginTop:30,
          marginLeft:30,
          fontFamily:'Courier New',
          cursor:'pointer',
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
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Headphone")}
                    >
                        Headphone
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Watch")}
                    >
                        Watch
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Lotion")}
                    >
                        Lotion
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Footwear")}
                    >
                        Footwear
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Camera")}
                    >
                        Camera
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Nature")}
                    >
                        Nature
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Eyeglass")}
                    >
                        Eyeglass
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Computer")}
                    >
                        Computer
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => filterProductsByCategory("Book")}
                    >
                        Book
                    </Typography>
                </Toolbar>
            </AppBar>
      </div>
    )
}
export default Navbar