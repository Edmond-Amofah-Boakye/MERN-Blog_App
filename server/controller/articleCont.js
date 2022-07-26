const articleModel = require('../model/articles')

exports.createArticle = async(req, res)=>{

    const { title } = req.body

    const article = await articleModel.findOne({title: title})
    

    try {
        if(article){
            return res.status(401).json({message: 'title already chosen'})
        }
        const newArticle = new articleModel({
            title: req.body.title,
            image: req.file.path,
            content: req.body.content,
            category: req.body.category,
            createdBy: req.user.id,
            comments: []
        })

        await newArticle.save()

        if(!newArticle){
            
            return res.status(401).json({message: 'could not create article'})
        }

        return res.status(201).json({message: 'succesfully created an article', newArticle})


    } catch (error) {
        
        return res.status(401).json({message: 'article creation not succesful'})
    }

}

exports.getArticle = async(req, res)=>{
    try {
        const articles = await articleModel
        .find()
        .limit(parseInt(req.query.limit))
        .skip(parseInt(req.query.skip))
        .sort({"createdAt": -1})
        .populate("createdBy", "fullname")

        if(!articles){
            return res.status(400).json({message: 'no aticles found'})
        }

        return res.status(200).json({message: 'successfully fectched articles', articles})

    } catch (error) {
        return res.status(400).json({message: 'no aticles found'})
    }
}

exports.getSingleArticle = async(req, res)=>{
    try {
        const singleArticles = await articleModel
        .findById(req.params.id)
        .populate('createdBy', '-password')
        .populate('comments')

        if(!singleArticles){
            return res.status(400).json({message: 'no article found'})
        }

        return res.status(200).json({message: 'successfully fectched article', singleArticles})

    } catch (error) {
        return res.status(400).json({message: 'could not get article'})
    }
}

exports.updateArticle = async(req, res)=>{
    try {
        
        const article = await articleModel.findById(req.params.id)

        if(article.createdBy.toString() !== req.user.id){
            return res.status(403).json({message: 'not authorised to update'})
        }

        article.title = req.body.title
        article.image = req.file.path
        article.content = req.body.content
        article.category = req.body.category

        if(!article){
            return res.status(401).json({message: 'could not update article'})
        }

        article.save()
        
        res.status(201).json({message:'article updated successfully', article})

    } catch (error) {

        return res.status(400).json({message: 'could not update article'})
    }
}

exports.deleteArticle = async(req, res)=>{

    const article = await articleModel.findById(req.params.id)

    try {
        
        if(!article){
            return res.status(401).json({message: 'no article found'})
        }

        if(article.createdBy.toString() !== req.user.id){

            return res.status(403).json({message: 'not authorised to delete'})
        }

        const deleteArticle = await articleModel.findByIdAndDelete(req.params.id)

        res.status(201).json({message:'article deleted successfully'})

    } catch (error) {
        
        return res.status(400).json({message: 'could not delete article'})
    }
}