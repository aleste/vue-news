'use strict'

const News = use('App/Models/News')
const Comment = use('App/Models/Comment')
const AuthorizationService = use ('App/Services/AuthorizationService')

class CommentController {

    async index({ auth, request, params }) {
        const user = await auth.getUser()
        const { id } = params
        const news = await News.find(id)        
        AuthorizationService.verifyPermission(news, user)        
        return await news.comments().fetch()
    }

    async create({ auth, request, params }) {        
        const user = await auth.getUser()
        const { description } = request.all()
        const { id } = params
        const news = await News.find(id)
        AuthorizationService.verifyPermission(news, user)
        const comment = new Comment()
        comment.fill({
            description
        })    
        await news.comments().save(comment)
        return comment
    } 

    async destroy({ auth, request, params}) {
        const user = await auth.getUser()
        const { id } = params
        const comment = await Comment.find(id)
        const news = await comment.news().fetch()
        AuthorizationService.verifyPermission(news, user)
        await comment.delete()
        return comment        
    }

    async update({ auth, request, params}) {
        const user = await auth.getUser()
        const { id } = params
        const comment = await Comment.find(id)
        const news = await comment.news().fetch()
        AuthorizationService.verifyPermission(news, user)

        comment.merge(request.only([
            'description',
            'completed'
        ]))

        await comment.save()
        return comment        
    }    

}

module.exports = CommentController
