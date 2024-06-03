import React from 'react';
import { AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { ShoppingCartOutlined, AccountCircleOutlined } from '@mui/icons-material';

const NavigationBar = ({ cartItemCount }) => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#333' }}>
            <Toolbar className="toolbar">
                <div className="brand-title">
                    <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                        The 3D Craft House
                    </a>
                </div>
                <div className="icons-container">
                    <IconButton color="inherit" aria-label="cart">
                        <Badge badgeContent={cartItemCount} color="error">
                            <ShoppingCartOutlined style={{ color: 'white' }} />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" aria-label="account">
                        <AccountCircleOutlined style={{ color: 'white' }} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
