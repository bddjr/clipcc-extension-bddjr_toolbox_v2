/** Copy from https://github.com/Clipteam/clipcc-vm/blob/master/src/util/cast.js#L49 */
module.exports = (value)=>{
    // Already a boolean?
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if ((value === '') ||
            (value === '0') ||
            (value.toLowerCase() === 'false')) {
            return false;
        }
        // All other strings treated as true.
        return true;
    }
    // Coerce other values and numbers.
    return Boolean(value);
}
