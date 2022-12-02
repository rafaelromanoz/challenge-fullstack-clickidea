export default class CardRepo {
  constructor(private cardModel: any) {}

  public async getCardByIdRepo(id: string) {
    return this.cardModel.get(id);
  }

  public async getAllCardsRepo() {
    return this.cardModel.findAll();
  }

  public async createCardRepo(body: any) {
    return this.cardModel.create(body)
  }
}