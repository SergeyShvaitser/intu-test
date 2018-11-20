import { StopwatchDriver } from 'views/containers/Stopwatch.driver.js'

describe('Stopwatch Container', () => {
  let driver = null

  beforeEach(() => {
    driver = new StopwatchDriver()
  });

  test('should render Counter', () => {
    expect(driver.get.Counter().length).toEqual(1);
  })

  test('should render LapsList', () => {
    expect(driver.get.LapsList().length).toEqual(1);
  })

  test('should render Counter with correct props', () => {
    const component = driver.get.Counter()

    expect(component.prop('currentTime')).toEqual(driver.mockData.currentTime());
    expect(component.prop('start')).toEqual(driver.get.instance().start);
    expect(component.prop('reset')).toEqual(driver.get.instance().reset);
    expect(component.prop('confirmLap')).toEqual(driver.get.instance().confirmLap);
    expect(component.prop('isStarted')).toEqual(driver.mockData.isStarted());
  })

  test('should render LapsList with correct props', () => {
    expect(driver.get.LapsList().prop('laps')).toEqual(driver.mockData.laps());
  })

})
