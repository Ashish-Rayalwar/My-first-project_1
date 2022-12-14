const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",

           "booking":[
            
           ],
           
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           
           "sports": [
               "soccer"
           ],
       },
   ]

///////Assignment/session/post-api/////////////////////////////////////

router.post("/players",(req,res)=>{
  let newPlayer = req.body.profile
  
  let name = newPlayer.name

  let playerExist  = false;

 

  
  for(let i = 0;i<players.length;i++){
    let playersIndex=players[i]
    if(playersIndex.name===name){
      playerExist = true;
      break;
    }
  }

  

  if(playerExist){
   return res.send("user allready exist")
  }else{
    players.push(newPlayer)
    return res.send(players)
  }
  

  
   
    
    
   
  
//  console.log(newPlayer.name);

})

router.post("/players/:playerName/bookings/:bookingId",(req,res)=>{

  // let bookingId = req.body.bookingNumber
  
 let body = req.body
 let {booking} = players
 console.log(booking);
  let {playerName,bookingId} = req.params;
  let hasBookingId = false
  let profileExist = false
  
 for(let i =0;i<players.length;i++){
    
  
    
    if(players[i].name===playerName){
          if(players[i].booking.length===0){
            players[i].booking.push(body)
          } 
          if(players[i].booking.bookingNumber===bookingId){
            hasBookingId = true
          }
    }
 
       
            
          

    }
   
 
    if(profileExist){
      if(hasBookingId){
        res.send("error")
      }else{
        res.send(palyers)
      }
}





})


///////Assignment/session/post-api/////////////////////////////////////


///// Assignment/session/query-api




router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})





router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    console.log(req.body);
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})





module.exports = router;