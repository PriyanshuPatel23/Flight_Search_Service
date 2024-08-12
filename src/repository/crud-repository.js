const { where, Op } = require("sequelize");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something Went wrong in the Crud Repository");
      throw { error };
    }
  }

  async bulk(data) {
    try {
      const result = await this.model.bulkCreate(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in Crud Repository");
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("Something Went wrong in the Crud Repository");
      throw { error };
    }
  }

  async getAll(filter) {
    try {
      if (filter.name) {
        const result = await this.model.findAll({
          where: {
            [Op.startsWith]: filter.name,
          },
        });
        return result;
      } else {
        const result = await this.model.findAll();
        return result;
      }
    } catch (error) {
      console.log("Something Went wrong in the Crud Repository");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("Something Went wrong in the Crud Repository");
      throw { error };
    }
  }

  async destroy(modelId) {
    try {
      const result = await this.model.destroy(modelId);
      return result;
    } catch (error) {
      console.log("Something Went wrong in the Crud Repository");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
