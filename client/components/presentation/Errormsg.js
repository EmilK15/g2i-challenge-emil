import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const Errormsg = ({message}) => {
    const [show, setShow] = useState(true);

    if(show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>
                    {message}
                </p>
            </Alert>
        );        
    }
    return <p></p>;
};

Errormsg.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Errormsg;