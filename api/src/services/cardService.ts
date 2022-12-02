import CardRepo from "../repositories/CardRepo";
import db from '../models';

export default class CardService {

  private cardRepo: CardRepo;
  constructor() {
    this.cardRepo = new CardRepo(db.Card);
  }

  async getAllCardsService() {
    return this.cardRepo.getAllCardsRepo();
  }

  async createCardService(body: any) {
    return this.cardRepo.createCardRepo(body);
  }
}