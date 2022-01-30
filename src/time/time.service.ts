type TimeSuccess = {
  success: true;
  unix: number;
  utc: string;
};

type TimeError = {
  success: false;
  error: string;
};

export type Time = TimeSuccess | TimeError;

export class TimeService {
  getCurrentTime = (): Time => ({
    success: true,
    unix: Date.now(),
    utc: new Date().toUTCString(),
  });

  getTimeData = (dateString: string): Time => {
    if (!isNaN(Number(dateString))) {
      const date = new Date(Number(dateString));

      return {
        success: true,
        unix: date.getTime(),
        utc: date.toUTCString(),
      };
    }

    const date = new Date(dateString);

    if (date.getTime() !== date.getTime()) {
      return { success: false, error: 'Invalid Date' };
    }

    return {
      success: true,
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
  };

  checkSuccess = (o: any): o is TimeSuccess => {
    return o.success;
  };
}
