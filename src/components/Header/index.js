import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    list: {
        width: 250,
    },
}));

export default function SearchAppBar() {

    const [isOpen, setOpen] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer anchor={'left'} open={isOpen} onClose={() => setOpen(!isOpen)}>
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <List>
                        {['Home', 'About'].map((text, index) => (
                            <ListItem
                                button
                                key={text}
                                color={'primary'}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <InfoIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                        Photomania
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
