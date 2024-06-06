import { useState, ChangeEvent } from 'react';

interface UseFieldResult {
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
}

export const useInput = (type: string): UseFieldResult => {
    const [value, setValue] = useState<string>('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const reset = () => {
        setValue('');
    };

    return {
        type,
        value,
        onChange,
        reset
    };
};
