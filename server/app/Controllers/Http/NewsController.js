'use strict'

const News = use('App/Models/News')

class NewsController {
    async index({ auth }) {
        const user = await auth.getUser()
        return await user.news().fetch()
    }

    async create({ auth, request }) {        
        const user = await auth.getUser()
        const title = request.all()
        const news = new News()
        
        news.fill({
            title
        })
        
        await user.news().save(news)

        return news
    }    

}

module.exports = NewsController
