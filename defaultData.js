import { products } from "./constant/product.js";
import prodcutsdb  from "./models/productSchema.js";

const defaultData = async ()=>{
    try {


      const insertionOfData = await prodcutsdb.insertMany(products);
      if(insertionOfData){
        console.log('data successfully inserted into database');
      }
        
    } catch (error) {
        console.log('error while inserting data in database' , error.message);
    }
}

export default defaultData;