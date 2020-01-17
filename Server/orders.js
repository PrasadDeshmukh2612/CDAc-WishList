const db=require('./db')
const express=require('express')
const utils = require('./utils')

const router=express.Router();

//on click of place order
router.post('/order_placed',(request,response)=>{

    const{order_id,customer_id,product_id,}=request.body

    const connection=db.connect();
    const statement=`insert into Orders(order_id,customer_id,product_id) values (${order_id},${customer_id},${product_id})`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })

})




module.exports=router