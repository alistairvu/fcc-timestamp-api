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
    const { utc, unix } = service.getCurrentTime();
    const now = new Date();

    expect(unix).toBe(now.getTime());
    expect(utc).toBe(now.toUTCString());
  });
});
