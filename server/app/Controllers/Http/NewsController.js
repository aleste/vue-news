'use strict'

const News = use('App/Models/News')
const AuthorizationService = use ('App/Services/AuthorizationService')

class NewsController {
    
    async index({ auth }) {
        const user = await auth.getUser()
        return await user.news().fetch()
    }

    async create({ auth, request }) {        
        const user = await auth.getUser()
        const { title } = request.all()
        const news = new News()
        
        news.fill({
            title
        })
        
        await user.news().save(news)

        return news
    }    

    async destroy({ auth, request, params}) {
        const user = await auth.getUser()
        const { id } = params
        const news = await News.find(id)
        AuthorizationService.verifyPermission(news, user)
        await news.delete()
        return news        
    }

}

module.exports = NewsController
