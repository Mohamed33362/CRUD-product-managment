// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // find small number in all variables and return integar

// console.log(Math.trunc(Math.min(a,b,c,d)));

// // use variable a + d one time to get the needed output
// console.log(Math.pow(a , (Math.trunc(d)))); // 10000

// // get integer "2" form variablbe d with 4 methods

// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(d.toFixed(0))

// // use variables b + d to get this values

// console.log(((Math.floor (b))/ Math.ceil(d)).toFixed(2));// 66.67 => string
// console.log((Math.ceil (b))/ (Math.ceil(d)))// 67=>number


// /*
// string challange
// all solution must be in one chain
// you can use concatenate
// */

// let aa = "Elzero web school";

// // include this method in your solution [slice,charat]
// console.log(aa.toUpperCase().charAt(2).slice(2,6));// Zero

// if challenge

// let a = 100

// if(a < 10){
//     console.log(10)
// } else if(a >= 10 && a <=40){
//     console.log("10 to 40")
// }else if (a > 40){
//     console.log('> 40')
// }else{
//     console.log("unknown")
// }

// a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log ("> 40") : console.log("unknown")

// // write with ternary if syntax 

// let st = "Elzero Web School"

// if( typeof st === typeof "34"){
//     console.log("good")
// }


// // w position may change
// if( st.charAt(7).toLowerCase() === "w"){
//     console.log("good")
// }

// if(st !== "string"){
//     console.log("good")
// }
// if(st === "number"){
//     console.log("good")
// }
// if(st.substring(0 , 6).repeat(2) === "ElzeroElzero"){
//     console.log("good")
// }



// // swith challenge

// let job =  "Developer" 
// let salary = 0 

// if (job === "Manager"){
//     salary = 8000
// } else if (job == "IT" || job === "Support"){
//     salary = 6000
// }else if (job === "Developer" || job === "Designer"){
//     salary = 7000
// }else{
//     salary = 4000
// }
// switch (job){
//     case "Manager":
//     salary = 8000;
//     console.log ( `My Money is ${salary}`)
//     break;
//     case "IT":
//     case "Support":
//         salary = 6000
//         console.log (`My Money is ${salary}`)
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000
//         console.log (`My Money is ${salary}`)
//         break;
//         default:
//             salary = 4000
//             console.log (`My Money is ${salary}`)
// }

// let holiday = 0 ;
// let money = 0 ;

// switch (holiday){
//     case 0 :
//         money = 5000;
//         console.log(`My Money ${money}`)
//         break;
//     case 1 :
//     case 2 :
//         money = 3000;
//         console.log(`My Money ${money}`);
//         break;
//     case 3 :
//         money = 2000;
//         console.log(`My Money ${money}`);
//         break;
//     case 4 :
//         money = 1000;
//         console.log(`My Money ${money}`);
//         break;
//     case 5 :
//         money = 0;
//         console.log(`My Money ${money}`);
//         break;
//     default :
//     money = 0
//     console.log(`My Money ${money}`);
// }

// if(holiday === 0){
//     money = 5000
//     console.log(`My Money is ${money}`)
// }else if (holiday >= 1 && holiday <= 2){
//     money = 3000
//     console.log (`My Money is ${money}`)
// }else if (holiday === 3){
//     money = 2000 
//     console.log(`My Money is ${money}`)
// }else if (holiday === 4){
//     money = 1000 
//     console.log(`My Money is ${money}`)
// }else if (holiday === 5){
//     money = 0
//     console.log(`My Money is ${money}`)
// }else{
//     money = 0 
//     console.log(`My Money is ${money}`)
// }

// let myfreind = ["amar" , 'moaaz' , "temo" , 'aziz' , "sehto"]

// console.log(`hello ${myfreind}`)

// myfreind[0] = "tito"

// console.log(myfreind);


// let last = myfreind

// console.log(last)
// console.log(myfreind)


// let zero = 0 ;

// let counter = 3 ;

// let my = ["ahmed","mazero","elham","osama","gamal","ameer"]

// //  write code here


// console.log(my.slice(zero , 4).reverse())// osama,elham,mazero , ahmed

// let product = ["keyboard" , "mouse" , "monitor" , "apps" ,"programing" , "adel","mido"]
// let colors = ["red","green","blue","yellow","white","black"]
// let count = 5

// document.write(`<h1>All ${count} product</h1>`)

// for(let i = 0; i < count; i++){
//     document.write(`<div>`)
//     document.write(`<h3>[${i + 1}] ${product[i]}</h3>`)
    
//     for(let j = 0 ; j < colors.length ; j++){
//         document.write(`<p>${colors}</p>`)
//         if(colors === "white"){
//             break
//         }
        
//     }
//     document.write(`</div>`)
// }


// function challenge

// function showDetails(a = "string",b,c){
//     document.write(`<div>`)    
//     if(a == String){
//         document.write(a)
//     }
// document.write(a)
//     document.write(`</div>`)
// }
// a.toString
// console.log(typeof a)

// showDetails("

// let userForm = document.querySelector("[name = 'username']")
// let ageForm = document.querySelector("[name = 'age']")

// document.forms[0].onsubmit = function (e) {
//     let userValid = false;
//     let ageValid = false ;

//     console.log(userForm.value)
//     console.log(userForm.value.length)

//     if(userForm.value !== "" && userForm.value.length <=10){
//         userValid = true
//     }

//     if(ageForm.value !== ""){
//         ageValid = true
//     }

//     if(userValid === false || ageValid === false){
//         e.preventDefault()
//     }
// }

// let element = document.querySelector(".my-div")

// element.style.color = "red"; 
// element.style.backgroundColor = "yellow"; 

// element.style.cssText = "font-weight: bold; color:green"

// element.style.removeProperty("color")
// element.style.setProperty("font-size" , "40px" , "important")

// document.styleSheets[0].rules[0].style.removeProperty("line-height")
// document.styleSheets[0].rules[0].style.setProperty("background-color","red")

// let myFreinds = ["ahmed","amr","ali",["amar","moaaz",["adham","adam"]]];

// let [, , ,[a , ,[, b]]] = myFreinds

// console.log(a)
// console.log(b)

// let container = document.createElement(("div"))
// document.body.appendChild(container)
// container.style.textAlign = "center"
// container.style.padding = "8%"
// let name = ["Alia" , "Hana","Farida","Sozana","hany","didi"]
// let age = [18 + " years old", 22 + " years old",21 + " years old",20 + " years old" , 33 + " years old"]

// function elements(names , ages ) {
//     // 1 صنع العناصر
//     let card = document.createElement("div")
//     let head = document.createElement("h1")
//     let p = document.createElement("p")
//     let img = document.createElement("img")

//     // 2 صنع محتوي العناصر

//     let contentH = document.createTextNode(names)
//     let contentp = document.createTextNode(ages)
//     img.src = "images/cute-lilac-summer-dress-641x1024.jpg"

//     // 3.1 (اختياري) تغير تنسيقات المحتوي
//     card.style.width = "200px"
//     card.style.backgroundColor = "#444"
//     card.style.color = "white"
//     card.style.padding = "10px"
//     card.style.margin = "2px"
//     card.style.display = "inline-block"



//     img.style.width = "100%"

//     // 3.2 (اجباري) وضع المحتوي داخل العنصر
//     container.appendChild(card)
//     head.appendChild(contentH)
//     p.appendChild(contentp)
//     card.appendChild(head)
//     card.appendChild(p)
//     card.appendChild(img)
// }
// for (let i = 0; i < name.length; i++) {
//     elements(name[i],age[i])
// }


// console.log(container)

// let usd = document.getElementById("usd")
// let egp = document.getElementById("egp")

// usd.onkeyup = function () {
//     egp.value = usd.value * 19.5
// }
// egp.onkeyup = function () {
//     usd.value = egp.value / 19.5
// }

// let openE = document.getElementById("open")
// let closeE = document.getElementById("close")
// let cont = document.getElementById("contaner")

// closeE.classList.add("hide")
// cont.classList.add("hide")

// closeE.onclick = function () {
//     cont.classList.add("hide")
//     openE.classList.remove("hide")
//     this.classList.add("hide")
//     this.style.background = "black"
//     this.style.color = "white"
// }

// openE.onclick = function() {
//     cont.classList.remove("hide")
//     this.classList.add("hide")
//     closeE.classList.remove("hide")
// }

// let btn = document.getElementById("btn")

// window.onscroll = function () {
//     if (scrollY >= 400) {
//         btn.style.display = "block"
//     }else{
//         btn.style.display = "none"
//     }
// }

// btn.onclick = function () {
//     scroll({
//         left:0,
//         top:0,
//         behavior:"smooth"
//     })
// }

// get total
// create product
// save local storage
// clear inputs
// read
// count
// delete
// update
// search
// clear data

let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("dis")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let submit = document.getElementById("submit")
let mood = "create";
let tmp;


// get total

function getTotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + -ads.value
        - +discount.value);
        total.innerHTML = result
        total.style.background = "green"
    }else{
        total.innerHTML = "";
        total.style.background = "#a00d02"
    }
}

// create

let dataPro = [];
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
}else {
    dataPro = []
}


submit.onclick = function () {
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }

    if (title.value != "" && price.value != "" && category.value != "" && newPro.count < 100) {
            if(mood === "create"){
        if(newPro.count > 1 ){
            for (let i = 0; i < newPro.count; i++) {
            dataPro.push(newPro)
            }
        }else{
            dataPro.push(newPro)
        }
    }else {
        dataPro[ tmp ] = newPro
        mood = "create"
        submit.innerHTML = "Create"
        count.style.display = "block"
    }
    clearData()
    }





    localStorage.setItem('product',JSON.stringify(dataPro))
    showData()
}

// CLEAR INPUTS 

function clearData(){
    title.value = ""
    price.value = ""
    taxes.value = ""
    ads.value = ""
    discount.value = ""
    total.innerHTML = ""
    count.value = ""
    category.value = ""
}

// read

function showData() {
    let table = "";
    getTotal()

     for(let i = 0; i < dataPro.length; i++){
        table += `
    <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delate</button></td>
    </tr>
        `
    } 
    document.getElementById("tbody").innerHTML = table
    let btn = document.getElementById("deleteAll")
    if (dataPro.length > 0) {
        btn.innerHTML = 
        `<button onclick='deleteAll()'>Delate All (${dataPro.length})</button>`
    }else{
        btn.innerHTML = ""; 
    }

} 

showData()

// delete

function deleteData(i) {
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro)
    showData()
}


function deleteAll() {
    localStorage.clear()
    dataPro.splice(0)
    showData()
}

// count 

// update

function updateData(i) {
    title.value = dataPro[i].title
    price.value = dataPro[i].price
    taxes.value = dataPro[i].taxes
    ads.value = dataPro[i].ads
    discount.value = dataPro[i].discount
    getTotal()
    count.style.display = "none"
    category.value = dataPro[i].category
    submit.innerHTML = "updata"
    mood = "update"
    tmp = i;
    scroll({
        top:0,
        behavior:"smooth"
    })
}

// search

let searchMood = "Title"

function getSearchMood(id) {
    let search = document.getElementById("search")
    if(id == "searchTitle"){
        searchMood = "Title"
    }else {
        searchMood = "Category"
    }
    search.placeholder = "Search by " + searchMood
    search.focus()
    search.value = ""
    showData()
}

function searchData(value) {
    let table = ""
    for (let  i= 0; i < dataPro.length ; i++) {
        
    
    if (searchMood == "Title") {
        
            if (dataPro[i].title.includes(value.toLowerCase())) {
    table += `
        <tr>
        <td>${i +1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delate</button></td>
        </tr>
        `;
}
        
    }else{
            if (dataPro[i].category.includes(value.toLowerCase())) {
    table += `
        <tr>
        <td>${i + 1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delate</button></td>
        </tr>
        `;
}
        }
    }
        document.getElementById("tbody").innerHTML = table

}

// clean data 

