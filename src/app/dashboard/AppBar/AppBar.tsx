'use client'

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import AppBarMui from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

const AppBar = () => {
    const { user, isLoading } = useUser();

    return <AppBarMui position="static" sx={{ marginBottom: '20px' }}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
            </Typography>
            { !isLoading && <Link href='/profile'><Avatar src={user?.picture || ''} /></Link> }
        </Toolbar>
    </AppBarMui>
}

export default AppBar;