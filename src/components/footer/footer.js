import * as React from 'react';
import Box from '@mui/material/Box';
import "./footer.css"
import { anchorStyle } from '../../utils/constants';

export default function Footer() {
    return (
        <Box className='footer'>
            <p className="cp-text">
                © Copyright 2022 Nanobains. All rights reserved.
            </p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap"
            }}>
                <a
                    href='https://rapidapi.com/saijeevanballa-SQhbMuR2KtK/api/ai-translation-apis/'
                    target="_blank" rel="noreferrer"
                    style={{ ...anchorStyle, marginRight: "10px" }}
                >
                    APIs
                </a>

                <a
                    href='https://rapidapi.com/saijeevanballa-SQhbMuR2KtK/api/ai-translation-apis/discussions'
                    target="_blank" rel="noreferrer"
                    style={{ ...anchorStyle, marginRight: "10px" }}
                >
                    Discussions
                </a>

                <a
                    href='https://rapidapi.com/saijeevanballa-SQhbMuR2KtK/api/ai-translation-apis/details'
                    target="_blank" rel="noreferrer"
                    style={{ ...anchorStyle, marginRight: "10px" }}
                >
                    About
                </a>
                <a
                    href='https://paypal.me/SaiJeevanBalla'
                    target="_blank" rel="noreferrer"
                    style={anchorStyle}
                >
                    Support Me
                </a>
            </div>
        </Box >
    );
}
