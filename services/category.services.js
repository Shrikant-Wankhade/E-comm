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

// const deleteACategory = async(data)=>{
//     const deletedCategory = await Category.destroy({
//         where:{
//             name:data.name,
//             cost: data.cost
//         }
//     })
// }

module.exports={getAllCategories,createNewCategory,getCategoryById,getCategoryByName};