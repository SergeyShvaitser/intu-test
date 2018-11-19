import addTimePrefix from 'utils/addTimePrefix'

export default function formatTime(ms) {

  let milliseconds = parseInt(ms % 1000, 10),
      seconds = parseInt((ms / 1000) % 60, 10),
      minutes = parseInt((ms / (1000 * 60)) % 60, 10),
      hours = parseInt((ms / (1000 * 60 * 60)) % 24, 10);

  return `${addTimePrefix(hours)}:${addTimePrefix(minutes)}:${addTimePrefix(seconds)},${milliseconds}`;
}
