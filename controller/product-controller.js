import { response } from "express";
import Products from "../models/productSchema.js";


export const getProducts = async (request, response) => {
    try {
        const products = await Products.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request , response) => {
    try {
        const id = request.params.id;
        const product = await Products.findOne({'id': id});
       
        response.json(product);
        console.log('the is looking for'+product);
    } catch (error) {
        
    }
}