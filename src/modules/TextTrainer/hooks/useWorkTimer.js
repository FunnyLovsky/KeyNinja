import { useState } from 'react';

export const useWorkTimer = () => {
    const [startTime, setStartTime] = useState(0);

    const startWork = () => {
        setStartTime(Date.now());
    };

    return {
        startTime,
        startWork,
    };
};
