import { Request, Response, NextFunction } from 'express';
import statusCodes from '../http/statusCodes';
import CardService from '../services/cardService';

export default class CardController {
  private cardService: CardService;
  constructor() {
    this.cardService = new CardService();
  }
  async getAllCardsController(req: Request, res: Response, next: NextFunction) {
    try {
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