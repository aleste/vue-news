'use strict'

const Model = use('Model')

class News extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = News
