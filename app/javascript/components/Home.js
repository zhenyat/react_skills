import React     from "react"
import PropTypes from "prop-types"
import {Nav}     from "react-bootstrap"

import HomeNav   from './HomeNav'
              
class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <HomeNav />
            </React.Fragment>
        );
    };
};

export default Home
