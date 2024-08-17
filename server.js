const express = require('express');
const axios = require('axios')
const app = express()
const cors = require('cors')
const port = 5346
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

const b_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODgxMjEzLCJpYXQiOjE3MjM4ODA5MTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM3YmI1OGY0LTc5NjYtNGFjZC04Yjc3LTEzNTZlNGU3NmI4MSIsInN1YiI6IjIxMTFjczAxMDU3NUBtYWxsYXJlZGR5dW5pdmVyc2l0eS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6Ik1hbGxhcmVkZHkgVW5pdmVyc2l0eSBIeWQiLCJjbGllbnRJRCI6IjM3YmI1OGY0LTc5NjYtNGFjZC04Yjc3LTEzNTZlNGU3NmI4MSIsImNsaWVudFNlY3JldCI6ImlRcUZLQnpRYlhGWXF6YnMiLCJvd25lck5hbWUiOiJLT1BQVUxBIFNSSUNIQVJBTiBTQUkgS1JJU0hOQSBQSEFOSSIsIm93bmVyRW1haWwiOiIyMTExY3MwMTA1NzVAbWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJyb2xsTm8iOiIyMTExQ1MwMTA1NzUifQ.UpSX-ICJEf7DKEF2lQfNg8a7KsxDtTBHvZo2qSANCKQ'



// app.get('/getItem/:comp/:cate/:top/:min/:max', async (req, res) => {
//     const {comp,cate,top,min,max} = req.params;
//   try {
//     const response = await axios.get(`http://20.244.56.144/test/companies/${comp}/categories/${cate}/products?top=${top}&minPrice=${min}&maxPrice=${max}`, {
//       headers: {
//         'Authorization': `Bearer ${b_token}`
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error Api call');
//   }
// });


app.post('/getItems', async(req, res) => {
    const {comp,cat,top,min,max} = req.body;
    try {
        const response = await axios.get(`http://20.244.56.144/test/companies/${comp}/categories/${cat}/products?top=${top}&minPrice=${min}&maxPrice=${max}`, {
          headers: {
            'Authorization': `Bearer ${b_token}`
          }
        });
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error Api call');
      }

})

app.get('/', (req, res) => {
    res.send('This is Working')
})

app.listen(port) 