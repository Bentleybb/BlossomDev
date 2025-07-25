const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
<<<<<<< HEAD
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://hyojin:mypassword123@cluster0.gmzf1ik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"||
=======
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://BinliHan:jmM8L7trmOIjGa2c@cluster0.b5u9sk4.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0"||
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
   
   