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
           "booking":[
                  
           
                       ],
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "booking":[
                  
            
                       ],
           "sports": [
               "soccer"
           ],
       },
   ]


   let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

 
 ///////// query //////////////

 router.post("/votingAge", (req, res)=>{
  console.log(req.query);
    let age = req.query.age;
    console.log(age);
    for(let i = 0;i<persons.length;i++){
      if(persons[i].age>=age){
        persons[i].votingStatus=true
      }
    }
    console.log(persons);
    let data = persons.filter((ele)=>ele.votingStatus===true)
    console.log(data);
    res.send(data)
 })





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
//  console.log(booking);
  let {playerName,bookingId} = req.params;
  let hasBookingId = false
  let profileExist = false
  let store = 0;
  
 for(let i =0;i<players.length;i++){
    

    
    if(players[i].name===playerName){
         if(players[i].booking.length === 0){
          players[i].booking.push(body)
         }
         if(players[i].booking[i].bookingNumber === bookingId){
            hasBookingId = true;
            break;
         }
         
         
          
         
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