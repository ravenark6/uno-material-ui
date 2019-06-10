import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Examples from './Examples';
import Overview from './Overview';

const useStyles = makeStyles((theme: any) => ({
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        minWidth: 0,
        overflowY: 'auto',
        padding: theme.spacing.unit * 2,
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    },
    toolbar: theme.mixins.toolbar,
}));

export default (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Navigation />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    <Route path='/' exact={true} component={Overview} />
                    <Route path='/examples' exact={true} component={Examples} />
            </main>
        </div>
    );
};
