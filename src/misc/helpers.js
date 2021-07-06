export function diff(a, b) {
    let diff = a.filter(x => !b.includes(x));
    return diff.length === 0;
};