const category = require('../models/category');
const{Category} = require('../models/index');

const getAllCategories = async()=>{
    const allCategoriesData = await Category.findAll();
    return allCategoriesData;   
} 

const createNewCategory = async (data)=>{
    const newCategory = await Category.create({
        name: data.name,
        description: data.description,
        cost: data.cost
    });  
    return newCategory;
}

const getCategoryById = async (idData)=>{
    const response = await Category.findAll({
        where:{
            id:idData
        }
    });   
    return response;      
}

const getCategoryByName = async(nameData)=>{
    const response = await Category.findAll({
        where:{
            name:nameData
        }
    })
    return response;
}


const updateCategory = async(id,data)=>{
    const response = Category.update(
    {
        name:data.name,
        description: data.description,
        cost: data.cost
    },
    {
    where: {
        id: id
    }  
    });  
    return response;
}

const deleteCategory = async(name)=>{
    const response = Category.destroy({
        where: {
            name: name,
        }
    });
    return response;
}

module.exports={updateCategory,
    getAllCategories,
    createNewCategory,
    getCategoryById,
    getCategoryByName,
    deleteCategory,
};