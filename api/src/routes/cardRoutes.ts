import { Router } from 'express';
import CardController from '../controllers/CardController';
import CardService from "../services/CardService";
import CardRepo from "../repositories/CardRepo";
import db from "../models";

const cardRepo = new CardRepo(db.Cards);

const cardService = new CardService(cardRepo);

const cardController = new CardController(cardService);

const cardRouter = Router();

cardRouter.post('/', cardController.createCardController.bind(cardController))
cardRouter.get('/', cardController.getAllCardsController.bind(cardController));

export default cardRouter;