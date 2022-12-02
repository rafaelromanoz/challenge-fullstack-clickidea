import CardRepo from "../repositories/CardRepo";
export default class CardService {
  constructor(private readonly cardRepo: CardRepo) {}

  async getAllCardsService() {
    return this.cardRepo.getAllCardsRepo();
  }

  async createCardService(body: any) {
    return this.cardRepo.createCardRepo(body);
  }
}