import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function BasicModal(props) {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={props.style}>
                    {props.children}
                </Box>
            </Modal>
        </div>
    );
}


BasicModal.propTypes = {
    style: PropTypes.object,
}

BasicModal.defaultProps = {
    style: {
        p: 4,
        top: '50%',
        left: '50%',
        width: 400,
        padding: "30px",
        display: "flex",
        borderRadius: "15px",
        position: 'absolute',
        flexDirection: "column",
        border: '2px solid #000',
        bgcolor: 'background.paper',
        transform: 'translate(-50%, -50%)',
        boxShadow: `-15px -15px 15px rgba(255,255,255,0.2),
                    15px 15px 15px rgba(0,0,0,0.1)
                    `,
    }
}

export default BasicModal
