export default function addPrefix(value) {
    return value < 10 ? `0${value}` : value
};
