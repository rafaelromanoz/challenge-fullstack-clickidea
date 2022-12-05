import { Router } from 'express';
import CardController from '../controllers/CardController';
import CardService from "../services/CardService";
import CardRepo from "../repositories/CardRepo";
import db from "../models";
import authMiddleware from '../middlewares/authMiddleware';
import {celebrate, Joi, Segments} from "celebrate";

const cardRepo = new CardRepo(db.Cards);

const cardService = new CardService(cardRepo);

const cardController = new CardController(cardService);

const cardRouter = Router();

cardRouter.get('/:id',
    authMiddleware,
    cardController.getCardsByIdController.bind(cardController)
);

cardRouter.get('/', authMiddleware, cardController.getAllCardsController.bind(cardController));

cardRouter.post('/',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            list: Joi.string().required(),
            content: Joi.string().required()
        })
    }),
    authMiddleware,
    cardController.createCardController.bind(cardController));

cardRouter.put('/:id',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            list: Joi.string().required(),
            content: Joi.string().required()
        }),
    }),
    authMiddleware,
    cardController.createCardController.bind(cardController));

cardRouter.delete(
    '/:id',
    authMiddleware,
    cardController.deleteCardController.bind(cardController)
);

export default cardRouter;