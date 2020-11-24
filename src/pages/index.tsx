import { Button } from '@material-ui/core'
import * as  React from 'react'
import ButtonAppBar from '../component/ButtonAppBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import blog2 from './blog2.jpg';
import { Link } from "gatsby";
import Footer from '../component/Footer';

const useStyles = makeStyles((theme: Theme) => ({

    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export default () => {
    const classes = useStyles();
    return (

        <div className='blogs'>
            <ButtonAppBar />
            <Grid item xs={12} md={8}>                
                <div style={{ display: "flex", justifyContent: "space-around", flexFlow: "row-wrap", alignItems: "center", width: "100%" }}>

                    <div style={{ margin: "0 auto" }}><img src={blog2} width="450px" height="500px" /></div>
                     
                    <div style={{ textAlign: "center", margin: "0 auto" }}>
                        <Typography variant="h6" gutterBottom>
                    Want to See My Blogs?
                 </Typography>
                 <Divider />
                        
                        <Button variant="contained" color="Black">
                            <Link to='/blogs' style={{ color: "inherit", textDecoration: "none" }}>Click Here </Link>
                        </Button>
                    </div>
                </div>
            </Grid>
            <Footer />
        </div>
    )

}

