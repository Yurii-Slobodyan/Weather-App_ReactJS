import React, { useState, useEffect } from 'react';
import './CurrentTime.scss';

function CurrentTime() {

    const [TimeState, setTimeState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setTimeState(new Date()), 1000);
    }, []);

    return (
        <div className="current-time">
            <p className='current-time__time'>
                {TimeState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                })}
            </p>
        </div>
    );
}

export default CurrentTime;