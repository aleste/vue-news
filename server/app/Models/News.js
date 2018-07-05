'use strict'

const Model = use('Model')

class News extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    } 
    comments () {
        return this.hasMany('App/Models/Comment')
      }    
}

module.exports = News
