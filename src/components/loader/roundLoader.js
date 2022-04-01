import React from 'react'

let style = {
    position: "absolute",
    color: "White",
    top: "50%",
    left: "45%",
    height: "80px",
    width: "80px"
}

function RoundLoader({ show }) {
    return (
        <>
            {
                show ? <img src="./loading.gif"
                    style={style}
                    alt="loading"
                /> : null
            }
        </>

    )
}

export default RoundLoader