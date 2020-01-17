const db=require('./db')
const utils=require('./utils')
const express=require('express')
const multer=require('multer')
const upload=multer({dest:'./images'})

const router=express.Router()

router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from Products_Data`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.get('/search_by_productId/:product_id',(request,response)=>{
    const {product_id} = request.params
    const connection=db.connect()
    const statement=`select * from Products_Data where product_id = ${product_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.get('/search_product_asc',(request,response)=>{
   // console.log('inside search ');
    
    const connection=db.connect()
    const statement=`select * from Products_Data order by price asc`
    connection.query(statement,(error,data)=>{
    //    console.log(statement);
        
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/',upload.single('images'),(request,response)=>{
    const{product_id,vendor_id,category_id,product_name,description,price,quantity}=request.body
    const image=request.file.filename   

    const connection=db.connect()
    const statement=`insert into Products_Data(product_id,vendor_id,category_id,product_name,image,description,price,quantity) 
    values (${product_id},${vendor_id},${category_id},'${product_name}','${image}','${description}',${price},${quantity})`

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
//not used
router.post('/search',(request,response)=>{
    const connection=db.connect()
    const {product_name,price} = request.body
    const statement=`select * from Products_Data where product_name like '%${product_name}%' order by price asc`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.delete('/:product_id',(request,response)=>{
    const{product_id}=request.params

    const connection=db.connect()

    const statement=`delete from Products_Data where product_id=${product_id}`

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.get('/details/:product_id',(request,response)=>{
    const {product_id} = request.params
    const connection = db.connect()
    const statement = `select * from Products_Data where product_id =${product_id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.put('/update/:product_id',(request,response)=>{
    const{product_id}=request.params

    const{category_id,vendor_id,product_name,description,price,quantity}=request.body

    const connection=db.connect()

    const statement=`update Products_Data set category_id=${category_id},vendor_id=${vendor_id},product_name='${product_name}',
    description='${description}',price=${price},quantity=${quantity} where product_id=${product_id}`

    connection.query(statement,(error,data)=>{
        connection.end()

        response.send(utils.createResult(error,data))
    })
})
module.exports=router
