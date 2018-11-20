import formatTime from 'utils/formatTime';

test('should return formated time', () => {
  expect(formatTime(2534)).toBe('00:00:02,534');
});
