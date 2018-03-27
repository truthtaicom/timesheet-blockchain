import { IBlock } from './blockchain'
import TimeSheet, { ITimeSheet } from './timesheet'

export default class Block implements IBlock{
  index;
  prevHash;
  hash;
  timestamp;
  data;

  constructor() {
    this.index = 0
    this.prevHash = null
    this.hash = null
    this.data = null
    this.timestamp = Date.now()
  }

  addData(data) {
    const _data: ITimeSheet = new TimeSheet(data)
    this.data = _data;
  }
}