const commentsModel = require('../model/comments')
const articleModel = require('../model/articles')

exports.createComment = async(req, res)=>{

    
    try {
        const article = await articleModel.findById(req.params.id)

        const comments = new commentsModel({
            name: req.body.name,
            content: req.body.content
        })

        await comments.save()

        article.comments.push(comments)
        await article.save()

        if(!comments){

            return res.status(401).json({message:"could not create a comment"})
        }

        res.status(201).json({message: "succesfully created a comment", comments, article})

    } catch (error) {

        res.status(400).json({message: "could not send comment"})
    }
}