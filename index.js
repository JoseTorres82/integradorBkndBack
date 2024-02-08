/* const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());

// Rutas y lógica de la aplicación

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  }); */
  const express = require ("express");
  const mongoose = require("mongoose");
  require("dotenv").config();
  const userRuotes = require('./routes/userRoutes');
  
  
  const app = express();
  const port = process.env.PORT || 5500;
  
  //middleware
  app.use(express.json());
  app.use('/api', userRuotes);
  
  
  
  //routes
  app.get('/', (req,res) => { 
      res.send("Hola ahí, esta es mi app de backend!😁");
  });
  
  //conección a MongoDB 
  mongoose
      .connect(process.env.MONGODB_URI)
      .then(()=> console.log("Conected to MongoDB Atlas"))
      .catch((error) => console.error(error));
  
  app.listen(port, () => console.log('Server runing on port', port));
  
  