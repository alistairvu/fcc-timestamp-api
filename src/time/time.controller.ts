import { TimeService } from './time.service';

export class TimeController {
  private timeService: TimeService;

  constructor() {
    this.timeService = new TimeService();
  }

  getCurrentTime = () => {
    const { success, ...data } = this.timeService.getCurrentTime();
    return data;
  };

  getTimeData = (dateString: string) => {
    const { success, ...data } = this.timeService.getTimeData(dateString);
    return data;
  };
}
