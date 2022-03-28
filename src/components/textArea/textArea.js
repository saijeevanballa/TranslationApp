import * as React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function MinHeightTextarea({ label, placeholder, style, row }) {
    return (
        <TextareaAutosize
            aria-label={label}
            minRows={row}
            placeholder={placeholder}
            style={style}
        />
    );
}

MinHeightTextarea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object,
    row: PropTypes.number
}

MinHeightTextarea.defaultProps = {
    label: "Translate Text",
    placeholder: "Please enter your input",
    style: {
        width: "100%",
        borderColor: "#1976d2",
        borderRadius: "15px",
        boxShadow: `-15px -15px 15px rgba(255,255,255,0.2), 15px 15px 15px rgba(0,0,0,0.1)`,
        padding: "15px"
    },
    row: 10
}