import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';


const NavBar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={props.navStyle}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block' },
                            }}
                        >
                            {props.pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex' } }}
                    >
                        {props.title}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    pages: PropTypes.array,
    navStyle: PropTypes.object,
    row: PropTypes.number
}

NavBar.defaultProps = {
    title: "Translator",
    pages: ['AI Translation', 'File Translation', 'Number Translation'],
    navStyle: {
        borderRadius: "15px",
        boxShadow: `-15px -15px 15px rgba(255,255,255,0.2), 15px 15px 15px rgba(0,0,0,0.1)`
    }

}

export default NavBar;
