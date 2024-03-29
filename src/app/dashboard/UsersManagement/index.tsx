'use client'
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import dashboardStore from "@/stores/DashboardStore";

const UsersManagement = observer(() => {
    const { users, isLoadingUsers } = dashboardStore;

    useEffect(() => {
        dashboardStore.loadUsers();
    }, []);

    if (isLoadingUsers) {
        return <CircularProgress />;
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users?.map(user => (
                <React.Fragment key={user.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={user.name} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={user.name}
                            secondary={user.email}
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>)
});

export default UsersManagement;
