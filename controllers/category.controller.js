const category = require('../models/category');
const {createNewCategory, getAllCategories, getCategoryById,getCategoryByName} = require('../services/category.services');

const getCategories = async (req,res)=>{
    const allCategoriesData = await getAllCategories(); //await needs to put here as it return a promise.
    return res.json({
        "message":"successfully fetched the categories",
        "success":true,
        "code":200,
        data: allCategoriesData,
    })
}

const createCategory = async(req,res)=>{
    const response = await createNewCategory(req.body);
    return res.json({
        "message":"successfully created the categories",
        "success":true,
        "code":201,
        data: response,
    })
}

// const deleteCategory = async(req,res)=>{
//     const response = await deleteACategory(req.body);
//     return res.json({
//         "message":"successfully deleted the categories",
//         "success":true,
//         "code":201,
//         data: response,
//     })
// }

const getCatById = async(req,res)=>{
    const response = await getCategoryById(req.params.id);
    return res.json({
        "message":"successfully fetched the categories",
        "success":true,
        "code":200,
        data: response,
    })
}

const getCatByName = async(req,res)=>{
    const response = await getCategoryByName(req.query.name);
    return res.json({
        "message":"successfully fetched the categories",
        "success":true,
        "code":200,
        data: response,
    })
}
module.exports = {
    createCategory,
    getCategories,
    getCatByName,
    getCatById
}