export default function addPrefix(value, isMilliseconds) {
    if(isMilliseconds && value < 10) {
      return `00${value}`
    } else if (isMilliseconds && value < 99) {
      return `0${value}`
    }
    return value < 10 ? `0${value}` : value
};
