//speed detector code
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
   

    readline.question("what is your speed: ", function (speed) {
        //if speed limit is below 70 it will output "Ok"
        if (speed<70){
            console.log('Ok');
        }
            //if the points exceeds 12 license is suspended
            else if(speed>=70 && speed<=80){
                console.log('points:2');
            }else if(speed>80 && speed<=100) {
                console.log('points:4');
            }else if(speed>100 && speed<=110) {
                console.log('points:6');
            }else if(speed>110 && speed<=120) {
                console.log('points:8');
            }else if(speed>120 && speed<=140) {
                console.log('points:10');
            }else if(speed>140 && speed<=150) {
                console.log('points:12');
            }else{console.log('license suspended')}
            
        readline.close()