const express = require('express');
const app = express();
const {products} = require('./data')

app.get("/",(req,res) => {
    res.send('<h1>Home Page</h1><a href="/api/products/">products</a>')
});

app.get('/api/products/',(req,res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts);
})

app.get('/api/products/:productID',(req,res) => {
    console.log(req.params);
    const {productID} = req.params;
    const productOne = products.find(
        (data) => data.id === Number(productID))

    if(!productOne){
        res.status(404).send(`Product doesn't exist`)
    }
    res.json(productOne)
})

app.get('/api/v1/query',(req,res) =>{
    const {search,limit} = req.query;
    let shortedProduct = [...products]

    if(search){
        shortedProduct = shortedProduct.filter((data) => {
            return data.name.startsWith(search);
        })
    }

    if(limit){
        shortedProduct = shortedProduct.slice(0, Number(limit))
    }
    if (shortedProduct.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] })
      }
      res.status(200).json(shortedProduct)
})

app.listen(5000, () => {
    console.log(`server is listening on port 5000...`);
});