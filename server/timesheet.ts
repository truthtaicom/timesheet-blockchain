export interface ITimeSheet {
  data: any
}

export default class TimeSheet implements ITimeSheet{
  data;

  constructor(data: ITimeSheet) {
    this.data = data;
  }
}