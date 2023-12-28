const mongoose = require('mongoose')
const orderDetailsSchema = new mongoose.Schema({
    orderId: {
      type: String,
      required: true
    },
    orderLocation: {
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      }
    }
  });
const productSchema = new mongoose.Schema({
    productName : {
        type:String,require:true
    },
    productImg:{
        type:String
    },
    orderDetails: {
        type: orderDetailsSchema,
        required: true
      },
      storeName:{
        type:String,require:true
      },
      userId:{
        type:String,require:true
      },
      unitPrice:{
        type:Number
      },
      quantity:{
        type:Number
      },
      mode:{
        type:String
      },
      orderDate:{
        type:Date
      }
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;