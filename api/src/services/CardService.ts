import { StatusCode } from "../http/statusCodes";
import IRequestCard from "../interfaces/card-interface";
import CardRepo from "../repositories/CardRepo";
import { createErrorMessage } from "../utils/functions";
export default class CardService {
  constructor(private readonly cardRepo: CardRepo) { }
  
  async getCardByIdService(id: string): Promise<IRequestCard | Error> {
    const card = await this.cardRepo.getCardByIdRepo(id);
    if (!card) throw createErrorMessage(StatusCode.NOT_FOUND, 'Esse card não existe');
    else return card;
  }

  async getAllCardsService() {
    return this.cardRepo.getAllCardsRepo();
  }

  async createCardService(body: IRequestCard): Promise<IRequestCard> {
    return this.cardRepo.createCardRepo(body);
  }

  async updateCardService(id: string, body: IRequestCard): Promise<IRequestCard> {
    if (!id) throw createErrorMessage(StatusCode.NO_CONTENT, 'Necessário passar ID')
    const card = await this.cardRepo.getCardByIdRepo(id);
    if (!card) throw createErrorMessage(StatusCode.NOT_FOUND, 'Esse card não existe');
    return this.cardRepo.updateCardRepo(id, body);
  }

  async deleteCardService(id: string): Promise<IRequestCard> {
    if(!id) throw createErrorMessage(StatusCode.NO_CONTENT, 'Necessário passar ID')
    const card = await this.cardRepo.getCardByIdRepo(id);
    if (!card) throw createErrorMessage(StatusCode.NOT_FOUND, 'Esse card não existe');
    await this.cardRepo.deleteCardRepo(id);
    const formatedCard = JSON.parse(JSON.stringify(card))
    return {
      ...formatedCard,
    }
  }
}