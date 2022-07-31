import React, { Fragment } from "react";
import { Grid, } from "@mui/material";
import { Sidebar, NavBar } from "..";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <NavBar />
            <Grid container height={'100%'} paddingTop="90px" >
                <Grid item xs={2} style={{ borderRight: '1px solid #E0E0E0', paddingTop: '10px', paddingBottom: '10px', height: '100%' }}>
                    <Sidebar />
                </Grid>
                <Grid container item xs={10} alignItems='flex-start' style={{padding: '20px'}}>
                    {children}
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Layout;