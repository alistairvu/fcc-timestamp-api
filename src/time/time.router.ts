import { Router, Request } from 'express';
import { TimeController } from './time.controller';

export const timeRouter = Router();

timeRouter
  .get('/', (_, res) => {
    const controller = new TimeController();
    res.send(controller.getCurrentTime());
  })
  .get('/:date', (req, res) => {
    const { date } = req.params;
    const controller = new TimeController();

    res.send(controller.getTimeData(date));
  });
