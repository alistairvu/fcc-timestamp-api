import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    service = new TimeService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return correct current time', () => {
    const response = service.getCurrentTime();
    const now = new Date();

    expect(service.checkSuccess(response)).toBe(true);

    if (service.checkSuccess(response)) {
      const { utc, unix } = response;

      expect(unix).toBe(now.getTime());
      expect(utc).toBe(now.toUTCString());
    }
  });

  it('should return correct time for 1451001600000', () => {
    const response = service.getTimeData('1451001600000');
    expect(service.checkSuccess(response)).toBe(true);

    if (service.checkSuccess(response)) {
      const { unix, utc } = response;
      expect(unix).toBe(1451001600000);
      expect(utc).toBe('Fri, 25 Dec 2015 00:00:00 GMT');
    }
  });

  it('should return correct time for 2015-12-25', () => {
    const response = service.getTimeData('2015-12-25');
    expect(service.checkSuccess(response)).toBe(true);

    if (service.checkSuccess(response)) {
      const { unix, utc } = response;
      expect(unix).toBe(1451001600000);
      expect(utc).toBe('Fri, 25 Dec 2015 00:00:00 GMT');
    }
  });

  it('should return correct object for abc', () => {
    const response = service.getTimeData('abc');
    expect(service.checkSuccess(response)).toBe(false);

    if (!service.checkSuccess(response)) {
      const { error } = response;
      expect(error).toBe('Invalid Date');
    }
  });
});
