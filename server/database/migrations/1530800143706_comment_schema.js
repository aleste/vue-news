'use strict'

const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()      
      table.integer('news_id').unsigned().references('id').inTable('news')
      table.text('description', 'longtext')      
      table.boolean('completed')
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
