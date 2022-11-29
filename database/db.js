import mongoose from 'mongoose'

export const connection = async (USERNAME , PASSWORD )=> {
    const URL =  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.odypyfz.mongodb.net/?retryWrites=true&w=majority`;
    try {

        const connect = await mongoose.connect(URL , {useUnifiedTopology: true , useNewUrlParser: true})
        if(connect){
            console.log('database connection successful');
        }
        
    } catch (error) {
        console.log('error while connecting to database' , error.message);
    }
}

export default connection;