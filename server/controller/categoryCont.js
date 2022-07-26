
const categoryModel = require('../model/category')

exports.addCategory = async(req, res)=>{
    const { name } = req.body
    try {
        const category = await categoryModel.findOne({name: name})

        if(category){
            return res.status(400).json({message: 'category already exist'})
        }

        const saveCategory = new categoryModel({
            name,
            image: req.file.path,
            createdBy: req.user.id
        })

        await saveCategory.save()

       res.status(200).json({message: "category created succesfully", saveCategory})

        if(!saveCategory){
            return res.status(401).json({message: "not succesful"})
        }
    } catch (error) {

        return res.status(401).json({message: "could not create category" })
    }
}

exports.getCategory = async(req, res)=>{
    try {

        const category = await categoryModel.find()

        if(!category){
            return res.status(400).json({message: "no category found"})
        }

        res.status(200).json({message: "category fetched successfully", category})
        
    } catch (error) {
        
        return res.status(400).json({ message: "could not fetch data" })
    }
}

exports.getSingleCategory = async(req, res)=>{

    try {
        const category = await categoryModel.findById(req.params.id)

        if(!category){
            return res.status(400).json({message: "no category found"})
        }

        res.status(200).json({message: 'succesfuly fetched category', category})
    } catch (error) {
        
        return res.status(400).json({message: "could not get category"})
    }
}

exports.updateCategory = async(req, res)=>{
    try {
        const category = await categoryModel.findById(req.params.id)

        if(!category){
            return res.status(400).json({message: "no category found"})
        }

        if(category.createdBy.toString() !== req.user.id){
            return res.status(401).json({message: "you are not allowed to update"})
        }

        category.name = req.body.name,
        category.image = req.file.path
       
        await category.save()

        res.status(200).json({message: 'succesfuly updated category', category})

    } catch (error) {
        
        return res.status(400).json({message: "could not update category"})
    }
}

exports.deleteCategory = async(req, res)=>{
    try {
        const category = await categoryModel.findById(req.params.id)
        
        if(!category){
            return res.status(400).json({message: "no category found"})
        }

        if(category.createdBy.toString() !== req.user.id){
            return res.status(400).json({message: "not allowed to delete"})
        }

        const deleteCategory = await categoryModel.findByIdAndDelete(req.params.id)

        res.status(200).json({message: 'succesfuly deleted category', category})

    } catch (error) {
        
        return res.status(400).json({message: "could not delete category"})
    }
}