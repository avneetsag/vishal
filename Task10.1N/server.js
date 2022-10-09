const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())
// app.get('/', (req,res)=>{
//     const user = {
//         username:"Deakin",
//         password:"123"
//     }
//     res.send(user)
// })
app.post('/' , (req,res)=>{
    const email = req.body.email
    console.log(req.body.email)
    const data = {
        members:[
            {
            email_address : email,
            status: "subscribed"
        }
        ]

        }
        var jsonData = JSON.stringify(data)
        const url = "https://us11.api.mailchimp.com/3.0/lists/c66dce3148"
    const options= {
        method :"POST",
        auth:"avneet:693bcfd07127722d6054f3b114f66ab9-us11"
    }
    
    
    const request = https.request(url,options,function(response)
    {
      response.on("data", function(data){
          console.log(JSON.parse(data))
      })
    })

    request.write(jsonData)
    request.end()
})
app.listen(8089, function(){
console.log("Server is running on port 8080")
})

