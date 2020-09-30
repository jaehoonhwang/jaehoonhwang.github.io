import React from 'react';

import  {
    Badge, 
    Container,
} from 'react-bootstrap';

export default function ProjectList(props) {

    return (
        <div style={{marginTop: "1em", marginBottom: "1em"}}>
            {
                props.codes.map((language, i) => {
                    return (
                        <Badge pill variant="primary"className="footer-icon">{language}</Badge>
                    );
                })
            }
        </div>
    );
}