'use strict';

import { Model } from 'sequelize';

interface CardAttributes {
  id: string;
  title: string;
  content: string;
  list: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cards extends Model<CardAttributes> implements CardAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    title!: string;
    content!: string;
    list!: string
    static associate(models: any) {
      // define association here
    }
  }
  Cards.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    list: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Cards;
};