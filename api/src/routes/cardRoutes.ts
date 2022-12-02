import { Router } from 'express';
import CardController from '../controllers/cardController';

const cardController = new CardController();

const cardRouter = Router();
cardRouter.post('/', cardController.createCardController)
cardRouter.get('/', cardController.getAllCardsController);

export default cardRouter;