module.exports = {
    add: (a, b) => (+a) + (+b),

    validateNumbers: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return false;
        }
        return true;
    },
};