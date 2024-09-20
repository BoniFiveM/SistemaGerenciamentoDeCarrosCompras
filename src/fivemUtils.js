// src/fivemUtils.js
export const emit = (event, data) => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(event, { detail: data }));
    }
};