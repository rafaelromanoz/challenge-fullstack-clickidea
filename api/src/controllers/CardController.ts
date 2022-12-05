import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../http/statusCodes';
import CardService from '../services/CardService';

export default class CardController {
  constructor(private readonly cardService: CardService) { }
  
  async getCardsByIdController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const card = await this.cardService.getCardByIdService(id);
      return res.status(StatusCode.OK).json(card);
    } catch (error) {
      return next(error);
    }
  }


  async getAllCardsController(req: Request, res: Response, next: NextFunction) {
    try {
      const cards = await this.cardService.getAllCardsService();
      return res.status(StatusCode.OK).json(cards);
    } catch (error) {
      return next(error);
    }
  }

  async createCardController(req: Request, res: Response, next: NextFunction) {
    try {
      const cards = await this.cardService.createCardService(req.body);
      return res.status(StatusCode.OK).json(cards);
    } catch (error) {
      return next(error);
    }
  }

  async updateCardController(req: Request, res: Response, next: NextFunction) {
    try {
      const cards = await this.cardService.createCardService(req.body);
      return res.status(StatusCode.OK).json(cards);
    } catch (error) {
      return next(error);
    }
  }

  async deleteCardController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const card = await this.cardService.deleteCardService(id);
      return res.status(StatusCode.OK).json(card)
    } catch (error) {
      return next(error);
    }
  }
} 