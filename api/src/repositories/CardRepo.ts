import IRequestCard from "../interfaces/card-interface";

export default class CardRepo {
  constructor(private cardModel: any) {}

  public async getCardByIdRepo(id: string): Promise<IRequestCard> {
    return this.cardModel.findByPk(id);
  }

  public async getAllCardsRepo(): Promise<IRequestCard[]> {
    return this.cardModel.findAll();
  }

  public async createCardRepo(body: IRequestCard): Promise<IRequestCard> {
    return this.cardModel.create(body)
  }

  public async updateCardRepo(id: string, body: IRequestCard): Promise<IRequestCard> {
    return this.cardModel.update(
      { ...body },
      {
        where: { id }
      }
   )
  }

  public async deleteCardRepo(id: string):Promise<IRequestCard> {
    return this.cardModel.destroy({
      where: {id}
    })
  }
}