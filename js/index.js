
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var productImgInput = document.getElementById("productImg");
var searchInput = document.getElementById("searchProducts");
var addButton =  document.getElementById("add");
var UpdateButton = document.getElementById("update");


var productList;    // array of object (JSON)
var myIndex;

if(localStorage.getItem("products")==null){
    productList=[];
}
else{
    productList=JSON.parse(localStorage.getItem("products"));  // convert string to JSON
    display(productList);
}


function addProduct(){
    if(productNameInput.classList.contains("is-valid")&&productPriceInput.classList.contains("is-valid")&&productCategoryInput.classList.contains("is-valid")&&productDescInput.classList.contains("is-valid")){
      
        var product={
            code : productNameInput.value,
            price : productPriceInput.value,
            category :productCategoryInput.value,
            desc : productDescInput.value,
            image:`images/${productImgInput.files[0]?.name}`
         };
         productList.push(product);
         
         localStorage.setItem("products",JSON.stringify(productList)); // convert JSON to string
         
         display(productList)
         clear();

    }
    else{
        alert("not valid data")
    }
    
}

function display(arr){
    var cartona="";

    for(var i=0;i<arr.length;i++){
        cartona+=`<div class="col-md-2">
                <div class="item">
                    <img src="${arr[i].image}" alt="" class="w-100">
                    <h2 class="h5"> Name : ${arr[i].code}</h2>
                    <p > Price : ${arr[i].price}</p>
                    <p > Category : ${arr[i].category}</p>
                    <p > Desc : ${arr[i].desc}</p>
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger w-100 mt-2">DELETE<i class="fas fa-trash ms-2"></i></button>
                    <button onclick="edit(${i})" class="btn btn-outline-warning w-100 mt-2 mb-5">UPDATE<i class="fas fa-pen ms-2 "></i></button>
                </div>
            </div>`;

    }
    document.getElementById("myRow").innerHTML=cartona;
}

function deleteProduct(deletedProduct){
    productList.splice(deletedProduct,1);
    localStorage.setItem("products",JSON.stringify(productList)); 

    display(productList);
    
}

function search(){

   word=searchInput.value;

    var cartona="";
    var searchedProducts=[];

    for(var i=0;i<productList.length;i++){
        if(productList[i].code.toLowerCase().includes(word.toLowerCase())){
        searchedProducts.push(productList[i]);
    }
}

display(searchedProducts);

// if(searchedProducts[0]==null){
//   document.getElementById("myRow").innerHTML="<h2 class='mx-auto text-center text-white w-50 bg-dark  p-3 rounded-4'> No Data To Show </h2>";
// }else{
//     display(searchedProducts);
// }

// if(cartona==""){
//     document.getElementById("myRow").innerHTML="<h2 class='mx-auto text-center text-white w-50 bg-dark  p-3 rounded-4'> No Data To Show </h2>";
// }
// else{
//     document.getElementById("myRow").innerHTML=cartona;
// }
    

}

function validateInputs(element){
    
    
    
    var regex={
        productName :/^[A-Z][a-z]{3,8}[0-9]{0,2}$/,
        productPrice : /^[1-9][0-9]{1,4}$/,
        productCategory : /^(mobils|tv|screens|;aptop)$/i,
        productDesc : /^[\w]{4,}$/,
    }
if(regex[element.id].test(element.value)==true){
    
   element.classList.add("is-valid");
   element.classList.remove("is-invalid");
   element.nextElementSibling.classList.add("d-none"); 

}
else{
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
}

// if(element.value==""){
//     element.nextElementSibling.classList.add("d-none");
//     element.classList.remove("is-valid")
//     element.classList.remove("is-invalid");
// }
 
    
}

function edit(index){
    myIndex=index;
    productNameInput.value=productList[index].code;
    productPriceInput.value=productList[index].price;
    productCategoryInput.value=productList[index].category;
    productDescInput.value=productList[index].desc;
    
    addButton.classList.add("d-none");
    UpdateButton.classList.remove("d-none");

    productNameInput.classList.add("is-valid");
    productPriceInput.classList.add("is-valid");
    productCategoryInput.classList.add("is-valid");
    productDescInput.classList.add("is-valid");

    
}

function updateProduct(){
    if(productNameInput.classList.contains("is-valid")&&productPriceInput.classList.contains("is-valid")&&productCategoryInput.classList.contains("is-valid")&&productDescInput.classList.contains("is-valid")){
    
    productList[myIndex].code=productNameInput.value;
    productList[myIndex].price=productPriceInput.value;
    productList[myIndex].category=productCategoryInput.value;
    productList[myIndex].desc=productDescInput.value;
    localStorage.setItem("products",JSON.stringify(productList));
    display(productList);

    addButton.classList.remove("d-none");
    UpdateButton.classList.add("d-none");

    clear();
    productNameInput.classList.remove("is-valid");
    productPriceInput.classList.remove("is-valid");
    productCategoryInput.classList.remove("is-valid");
    productDescInput.classList.remove("is-valid");


    }
    else{
        alert("not valid")
    }
    
    
}
function clear(){
    productNameInput.value=null;
    productPriceInput.value=null;
    productCategoryInput.value=null;
    productDescInput.value=null;

    productNameInput.classList.remove("is-valid");
    productPriceInput.classList.remove("is-valid");
    productCategoryInput.classList.remove("is-valid");
    productDescInput.classList.remove("is-valid");
}
























//localStorage
/*
localStorage.setItem("userName","ali");
localStorage.setItem("userName2","medooo");
//localStorage.removeItem("userName2");
var x = localStorage.getItem("userName");
console.log(x);
//localStorage.clear();
var z = localStorage.length;
console.log(z);
*/
//sessionStorage




// string methods
/*
"samsung".charAt(1);
"samsung".at(-1);
console.log(x.length);
console.log(x[3]);
"samsung".slice(1,3)
"test".substring(1,3)
"samsung".concat("nokia")
"samsung".includes("s")
"web design and web development".replace("web","medo")
var x = "web design and web development".replaceAll("web","medo")
"web design and web development".split(" ").slice(0,4).join(" ")
"web design and web development".toUpperCase()
"web design and web development".toLowerCase()
"web design and web development".toLocaleUpperCase() ******
"web design and web development".toLocaleLowerCase() ******
"         web      ".trim()
"         web      ".trimStart()
"         web      ".trimEnd()
"test".repeat(10)
*/



// var x = "Samsung".toLowerCase().includes("SA".toLowerCase())
// console.log(x);




// var word ="Mohamed";

// var result=regex.test(word);
// if(result==true){
//     console.log("match");
    
// }else{
//     console.log("not match");
    
// }

// var regex = /^[A-Z][a-z]{3,8}/;

// function validateNameInput(){
//     var word =productNameInput.value;

// var result=regex.test(word);
// if(result==true){
//     console.log("match");
    
// }else{
//     console.log("not match");
    
// }
    
// }
 