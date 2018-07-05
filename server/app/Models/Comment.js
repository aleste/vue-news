'use strict'

const Model = use('Model')

class Comment extends Model {
    news() {
        return this.belongsTo('App/Models/News')
    }
}

module.exports = Comment
