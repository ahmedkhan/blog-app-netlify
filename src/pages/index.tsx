import { Button } from '@material-ui/core'
import * as  React from 'react'
import ButtonAppBar from '../component/ButtonAppBar'
import blog from './blog.png'
import {Link } from "gatsby";

export default () => {
    return (
        <div className='blogs'>
            
            <ButtonAppBar />

            <div style={{display: "flex", justifyContent: "space-around", flexFlow: "row-wrap" , alignItems: "center", width: "100%"}}>

            <div style={{margin: "0 auto"}}><img src = {blog} width= "450px" height="500px"/></div>

            <div style={{textAlign: "center", margin: "0 auto"}}>
                <h1>Want to See My Blogs? </h1>
                <Button variant="contained" color="primary">
                    <Link to = '/blogs' style={{color: "inherit", textDecoration: "none"}}>Click Here </Link>
                </Button>

            </div>

            </div>
        </div>
    )
}

