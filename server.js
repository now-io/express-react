const express =require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT||5000;

// app.set('port',process.env.PORT||5000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/1',
            'name':'서지원',
            'birth':'932104',
            'gender':'남자',
            'job':'취준생',
           
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2',
            'name':'앙꼬',
            'birth':'981111',
            'gender':'여자',
            'job':'강아지',
             
            },
            {
              'id':3,
              'image':'https://placeimg.com/64/64/3',
              'name':'로다',
              'birth':'971214',
              'gender':'여자',
              'job':'학생',
               
              }
    ])
})

app.listen(port,()=>console.log(`listening on port ${port}`))
// app.listen(app.get('port'))