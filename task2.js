// 1) random dies

for(i=0; i<10; i++){
    let random_number = Math.floor(Math.random() * 10); 
    console.log(random_number)
}



// 2) dyanamic x and y 

function dnyaobj(num1,num2){

    let obj = { 
        sum: function(){
        console.log("additon--->",this.x + this.y)
        console.log("multiplication--->", this.x * this.y);
        console.log("sunstraction--->", this.x - this.y);
    }}

    obj.x = num1
    obj.y = num2
    console.log(obj)
    obj.sum()
}

dnyaobj(4,6)

// 3) add , mul , sun of array

function sum(a,b,...c){
    return a+b+c;
}
let array = [1, 2, 3, 5, 6, 7, 8];
console.log(sum(...array))


// 4) digital clock

function taketime(){
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    let time = String(hour) + ":" + String(minutes) + ":" + String(second);
    console.log(time)
}
setInterval(taketime,1000)