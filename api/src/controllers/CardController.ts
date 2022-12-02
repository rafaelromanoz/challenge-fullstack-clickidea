import { Request, Response, NextFunction } from 'express';
import statusCodes from '../http/statusCodes';
import CardService from '../services/CardService';

export default class CardController {
  constructor(private readonly cardService: CardService) {}
  async getAllCardsController(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('this', this)
      const cards = await this.cardService.getAllCardsService();
      console.log(cards)
      return res.status(statusCodes.OK).json(cards);
    } catch (error) {
      return next(error);
    }
  }

  async createCardController(req: Request, res: Response, next: NextFunction) {
    try {
      const cards = await this.cardService.createCardService(req.body);
      return res.status(statusCodes.OK).json(cards);
    } catch (error) {
      return next(error);
    }
  }
} 