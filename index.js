let phone = "123-22-2"

console.log(phone.padStart(9,"0"))
console.log(phone.padEnd(11,"0"))

fullName ="BroCode"

console.log(fullName.substr(4,2))
console.log(fullName.substring(4,2))

const hello = function(){
    console.log(true)
}

hello()

const person1   ={
    firstName: "Sara",
    goodbye: function(){
        console.log('Bye', this.firstName)
    },
    sayHey:() => console.log("Hey", this.firstName)
}

person1.goodbye()
person1.sayHey()

class Product{
    static price = 15
    static calculate()
    { console.log(15)}
}


console.log(Product.price, new Product().price)
tableau = [1,1,25,56,56]
tab =[...tableau]
console.log(tab)

const {firstName} = person1;
console.log(firstName)

function outer(){
    let counter = 0
   
    function inner(){
         counter ++
        console.log(counter)

    }
    return {inner}
}

count = outer()
count.inner()
count.inner()
count.inner()
count.inner()
count.inner()

//setTimeout(()=> console.log("Task1"))

console.log("Task 4")

function task1(){
    console.log('Task 1 completed')
}
function task2(){
    console.log('Task 2 completed')
}
function task3(){
    console.log('Task 3 completed')
}
function task4(){
    console.log('Task 4 completed')
}

task1()
task2()
task3()
task4()

 console.log('1')
 setTimeout(()=>  console.log('3'), 0
)

Promise.resolve().then(()=> console.log("5"))
console.log("4")

