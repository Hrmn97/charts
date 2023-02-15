const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors())

//data
const data=[
    {
        labels: ['January', 'February', 'March', 'April', 'May'],
        data:[{
            values:[20,15,30,40,25,50]
        },
        {
            values: [10,25,35,30,40,50] 
        }]
    }
]

app.get("/data",(req,res)=>{
    res.json(data)
})


app.listen(3001,()=>{
    console.log('server is up')
})