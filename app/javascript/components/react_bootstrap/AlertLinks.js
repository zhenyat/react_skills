import React     from "react"
import PropTypes from "prop-types"
import Alert     from 'react-bootstrap/Alert'

const variants = ['primary', 'secondary', 'success', 'danger',
                  'warning', 'info',      'light',   'dark'];
              
class AlertLinks extends React.Component {
    render () {
        return (
            variants.map((variant, index) => (
                <Alert key={index} variant={variant}>
                    <strong><em>{variant}</em></strong> style alert with{' '}
                    <Alert.Link href="#">a link</Alert.Link>.
                    May click it.
                </Alert>
            ))
        );
    };
};

export default AlertLinks
