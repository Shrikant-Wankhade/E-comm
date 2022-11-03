
const CategoryController = require('../controllers/category.controller')

const routes = (app) =>{
    // to get all the categories
    app.get("/ecom/api/v1/categories",CategoryController.getCategories);

     // to create a new category
    app.post("/ecom/api/v1/categories",CategoryController.createCategory);

    app.get("/ecom/api/v1/categories/:id",CategoryController.getCatById);

    app.get("/ecom/api/v1/categoriesbyName/",CategoryController.getCatByName);

    app.put("/ecom/api/v1/categories/:id",CategoryController.updateACategory);

    app.delete("/ecom/api/v1/categoriesbyName/",CategoryController.deleteACategory)
}

module.exports = routes;