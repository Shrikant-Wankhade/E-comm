
const CategoryController = require('../controllers/category.controller')

const routes = (app) =>{
    // to get all the categories
    app.get("/ecom/api/v1/categories",CategoryController.getCategories);

     // to create a new category
    app.post("/ecom/api/v1/categories",CategoryController.createCategory);

    //to delete a category
    // app.delete("/ecom/api/v1/categories",CategoryController.deleteCategory);

    app.get("/ecom/api/v1/categories/:id",CategoryController.getCatById);

    app.get("/ecom/api/v1/categoriesbyName/",CategoryController.getCatByName);
}

module.exports = routes;