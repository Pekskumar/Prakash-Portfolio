import React from 'react';
import { Badge } from 'react-bootstrap';
const ExperienceCard = (props) => {
    return (
        <div className='single round-border p-4 mb-3'>
            <ul className='ps-4'>
                {props.data.detail.map((itemd, indexd) =>
                    <li className='text-gray' key={indexd}>{itemd}</li>
                )}
            </ul>
            <div>
                {props.data.technology
                    .map((itemt, indext) =>
                        <Badge key={indext} pill bg="dark" className='me-2'>
                            {itemt}
                        </Badge>
                    )}
            </div>
        </div>

    );
}

export default ExperienceCard;
