
import products from "../model/productSchema.js";
import Product from "../model/productSchema.js"


export const getProducts = async(request, response) => {
    try{
         const products =  await Product.find({});
        response.json(products);
    }catch(error){
        console.log("Error:", error.message)
    }
}

//Find is empty beacuse I want all the data.

export const getProductById = async (request, response) => {
    try{
        const product = await Product.findOne({'id': request.params.id})
        response.json(product)
    }catch(error){
        console.log("Error:",error.message)
    }
}