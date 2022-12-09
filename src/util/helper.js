function printDate(){
    let day = new Date()
    let month = day.getMonth();
    let year = day.getFullYear()
    console.log(`${day}/${month}/${year}`);
}

function getBatchDetails(batch,week,day,topic){
    console.log(`${batch} ${week} the topic for ${day} is ${topic}`);
}

module.exports.printDate=printDate
module.exports.getBatchDetails=getBatchDetails