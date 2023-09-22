import { useState } from 'react';

export const useCountError = () => {
    const [countError, setCountError] = useState(0);

    const clearError = () => {
        setCountError(0);
    };

    const incrementError = (count) => {
        setCountError((prevCount) => prevCount + count);
    };

    return {
        countError,
        clearError,
        incrementError,
    };
};
