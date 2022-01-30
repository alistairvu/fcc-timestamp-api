export class TimeService {
  getCurrentTime = () => ({
    unix: Date.now(),
    utc: new Date().toUTCString(),
  });
}
