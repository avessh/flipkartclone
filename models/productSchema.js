import mongoose from 'mongoose'
// import { products } from '../constant/product.js'

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
})

const Products =  mongoose.model('products' , productSchema)

export default Products;