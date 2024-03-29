'use client';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { UserBlock, UserName } from '@/app/profile/styled';
import UsersManagement from "@/app/dashboard/UsersManagement";

const UserContent = ({ user }: any) => {
    return <UserBlock
        variant="outlined"
        sx={{
            width: 320,
            // to make the card resizable
            overflow: 'auto',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Avatar src={user.picture} />
        </Box>
        <CardContent>
            <UserName>{user.name}</UserName>
            <Typography>{user.email}</Typography>
        </CardContent>
        <CardActions>
            <Link href='/dashboard'>
                <Button variant="outlined" color="primary">
                    Dashboard
                </Button>
            </Link>
            <Link href='/api/auth/logout'>
                <Button variant="contained" color="primary">
                    Logout
                </Button>
            </Link>
        </CardActions>
    </UserBlock>
}

export default UserContent;
