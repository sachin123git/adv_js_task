// 1) using callback function


function fun2() {
  data.age = 24;
  console.log(data)
}

function fun3(){
    data.surName = 'patil'
    console.log(data)
}

function fun1(data,fun2,fun3){
    console.log(data)
    fun2();
    fun3();
}

let data = {
  name: "sachin"
};

fun1(data,fun2,fun3);


// 2) using then & catch


let data = {
    name : 'sachin'
}
function updateobjects(data){
    return new Promise((resolve, reject)=>{
        resolve(data)
    })
}
updateobjects(data)
  .then((result) => {
    console.log(updateobjects(data));
  })
  .then((result) => {
    data.lastname = "patil";
    console.log(updateobjects(data));
  })
  .then((result) => {
    data.age = 24;
    console.log(updateobjects(data));
  })
  .then((result) => {
    data.add = "surat";
    console.log(updateobjects(data));
  })
  .catch((err) => {
    console.log("get some error");
  });


// 3) using try & catch

let array = [,1,4,3,6,34,6,5,'tops']

function updateArray(array){
    return new Promise((resolve)=>{
        resolve(array)
    })
}
try {
    array.push(100)
    console.log(array)

    array.unshift()
    console.log(array)
       array.shift()
       array.unshift('tops technology')
       console.log(array)
    
} catch (error) {
    console.log('get some eror')
}



// promise practice task

let pro = new Promise((resolve, reject) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let isExist = arr.includes(10);
  console.log(isExist);
  if (isExist) {
    resolve();
  } else {
    reject("get some error");
  }
});
pro
  .then((res) => {
    console.log("value is there");
  })
  .catch((error) => {
    console.log("error occur");
  });

let string = new Promise((resolve, reject) => {
  let string = "sachin";
  console.log(string);
  if (string === "sachin") {
    resolve("match");
  } else {
    reject("error");
  }
});
string
  .then((res) => {
    console.log("string matched");
  })
  .catch((err) => {
    console.log("get some error");
  });


// sort array task

let arr = [1, 30, 32, 4, 21, 100000];
let sortArr = arr.sort((a, b) => a - b);
console.log(sortArr);

let alphabets = ["d", "f", "a", "t", "b", "c"];
let newab = alphabets.sort();
console.log(newab);


