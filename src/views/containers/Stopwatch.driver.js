import React from 'react'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Stopwatch from 'views/containers/Stopwatch'
import Actions from 'views/components/Actions'
import Counter from 'views/components/Counter'
import LapsList from 'views/components/LapsList'

export class StopwatchDriver {
  constructor(props = {}) {
    this.wrapper = Enzyme.mount(
      <Stopwatch />
    )
  }

  mockData = {
    currentTime: () => 0,
    laps: () => [],
    isStarted: () => false,
  }

  get = {
    Counter: () => this.wrapper.find(Counter),
    Actions: () => this.wrapper.find(Actions),
    LapsList: () => this.wrapper.find(LapsList),
    instance: () => this.wrapper.find(Stopwatch).instance(),
  }

}
