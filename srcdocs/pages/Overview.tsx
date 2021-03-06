import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import Highlight from 'react-highlight';
import logo from '../static/uno-material-logo.svg';

const useStyles = makeStyles({
    code: {
        background: '#F8F8FF',
        fontSize: 15,
        padding: '6px',
    },
    container: {
        margin: '0',
        padding: 30,
        width: '100%',
    },
    content: {
        marginTop: 10,
    },
    divider: {
        marginBottom: '15px',
    },
    link: {
        color: '#165ffb',
        textDecoration: 'none',
    },
    logo: {
        width: '300px',
    },
    paper: {
        minHeight: '300px',
        padding: 30,
        width: '100%',
    },
    section: {
        marginBottom: '40px',
    },
});

export default  () => {
    const classes = useStyles({});

    return (
        <Grid container={true} className={classes.container}>
            <Paper className={classes.paper}>
                <img src={logo} className={classes.logo} />
                <Typography
                    paragraph={true}
                    variant='subtitle1'
                    className={classes.content}
                >
                    uno-material-ui is a set of custom
                    <a className={classes.link} href='https://material-ui.com/'> Material-UI</a> components
                    that extend their funcionalities in specific scenarios.
                </Typography>
                <br />
                <Typography variant='h4'>
                    Installation
                </Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle1' paragraph={true}>
                    uno-material-ui is available as a <a
                        href='https://www.npmjs.com/package/uno-material-ui'
                        className={classes.link}
                        target='_blank'
                    >
                        npm package
                    </a>
                </Typography>
                <Typography variant='h5' paragraph={true}>
                    Dependencies
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    <ul>
                        <li>
                            <a
                                href='https://www.npmjs.com/package/uno-react'
                                className={classes.link}
                            >
                                uno-react
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://material-ui.com/'
                                className={classes.link}
                            >
                                Material-UI
                            </a>
                        </li>
                    </ul>
                </Typography>
                <Typography variant='h5' paragraph={true}>
                    npm
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    To install and save in your <code className={classes.code}>package.json</code> dependencies, run:
                </Typography>
                <Highlight language='javascript'>
                    npm install uno-material-ui --save
                </Highlight>
                <br />
                <Typography variant='h4'>
                    Related projects
                </Typography>
                <Divider className={classes.divider}/>
                <Typography
                    paragraph={true}
                    variant='subtitle1'
                    className={classes.content}
                >
                    <a href='https://www.npmjs.com/package/uno-react' className={classes.link}>uno-react</a> features
                    hooks and functions that are quite useful to every dev.
                </Typography>
            </Paper>
        </Grid>
    );
};
