import React from 'react';
import './App.css';
import {Formik} from 'formik';
import {Button} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Вход" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="Регистрация" href="/trash" {...a11yProps(1)} />
                    <LinkTab label="Восстановление" href="/spam" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Auth_page/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Reg_page/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Req_page/>
            </TabPanel>
        </div>
    );
}

const App = () => {
    return (
        <div className="form">
            <NavTabs/>
        </div>
    );
}

const Auth_page = () => (
    <div>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = ''; //Введите адрес
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = ''; //Неверный адрес
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (

                <form onSubmit={handleSubmit} className="ui-form">
                    <Grid
                        container
                        direction="column"
                        justify=""
                        alignItems="center"
                    >

                        <h3>Авторизация</h3>
                        <div className="form-row">
                            <TextField
                                id="email"
                                type="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                required autocomplete="off"
                                variant="outlined"
                            />


                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className="form-row">
                            <TextField
                                id="password"
                                type="password"
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                required autocomplete="off"
                                variant="outlined"
                            />

                            {errors.password && touched.password && errors.password}
                        </div>
                        <p>
                            <Button type="submit" disabled={isSubmitting}>
                                Login
                            </Button>
                        </p>
                    </Grid>
                </form>
            )}
        </Formik>
    </div>
);

const Reg_page = () => (
    <div>
        <Formik
            initialValues={{name: '',email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = ''; //Введите адрес
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = ''; //Неверный адрес
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 3));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (

                <form onSubmit={handleSubmit} className="ui-form">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >

                        <h3>Регистрация</h3>
                        <div className="form-row">
                            <TextField
                                id="name"
                                type="name"
                                label="Имя"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                required autocomplete="off"
                                variant="outlined"
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className="form-row">
                            <TextField
                                id="email"
                                type="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                required autocomplete="off"
                                variant="outlined"
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className="form-row">
                            <TextField
                                id="password"
                                type="password"
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                required autocomplete="off"
                                variant="outlined"
                            />

                            {errors.password && touched.password && errors.password}
                        </div>
                        <p>
                            <Button type="submit" disabled={isSubmitting}>
                                Registrate
                            </Button>
                        </p>
                    </Grid>
                </form>
            )}
        </Formik>
    </div>
);

const Req_page = () => (
    <div>
        <Formik
            initialValues={{email: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = ''; //Введите адрес
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = ''; //Неверный адрес
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (

                <form onSubmit={handleSubmit} className="ui-form">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >

                        <h3>Восстановление</h3>
                        <div className="form-row">
                            <TextField
                                id="email"
                                type="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                required autocomplete="off"
                                variant="outlined"
                            />


                            {errors.email && touched.email && errors.email}
                        </div>
                        <p>
                            <Button type="submit" disabled={isSubmitting}>
                                Reset
                            </Button>
                        </p>
                    </Grid>
                </form>
            )}
        </Formik>
    </div>
);

export default App;
