import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(initialValue);

    useEffect(() => {
        const item = window.localStorage.getItem(key);
        if (item) {
            setStoredValue(JSON.parse(item));
        }
    }, [key]);

    const setValue = (value) => {
        if (value) {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } else {
            setStoredValue();
            window.localStorage.removeItem(key);
        }
    };
    return [storedValue, setValue];
};

export default useLocalStorage;