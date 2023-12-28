const express = require('express');
const Product = require('./modal/base.modal');
const connectToMongoDB = require('./config/mongo.config');
const app = express();
var cors = require('cors')
app.use(cors())

const productData = [
    {
      productName: 'Pan',
      productImg: 'Pan.jpg',
      orderDetails: {
        orderId: 'ord894',
        orderLocation: {
          city: 'City Z',
          country: 'Country Z'
        }
      },
      storeName: 'Electronics World',
      userId: 'user363',
      unitPrice: 899.99,
      quantity: 7,
      mode: 'Train',
      orderDate: new Date('2023-01-05')
    },
    
  ];
 
app.post('/save-dummy-data', async (req, res) => {
    try {
        await Product.insertMany(productData);
        console.log('Dummy product saved successfully');
        res.send('saved');
    } catch (error) {
        console.error('Error saving dummy product:', error);
        res.send('not saved');
    }
});
app.get('/sample-data',async(req,res)=>{
  try {
    const data = await Product.find()
    res.send({data:data})
  } catch (error) {
    res.status(500).send({msg:"something went wrong"})
  }
})

app.listen(8080, async () => {
    try {
        connectToMongoDB();
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
    console.log('App is running on port 8080');
});
