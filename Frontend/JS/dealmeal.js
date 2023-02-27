

// login start 

let username = sessionStorage.getItem("username")
console.log(username)
let user  = document.querySelector("#user-div")
console.log(user)




if(username){
user.innerHTML= `
<span>
<a href=""><img src="https://www.kindmeal.my/images/icon_notice.png" alt=""></a>
  </span>
<span>  

<select name="" id="dropdown">
    <option value="${username}">${username}</option>
    <option class="hover" value="">My Coupon</option>
    <option value="">My Recipes</option>
    <option value="">My CareMeal Profile</option>
    <option value="">Update Profile</option>
    <option value="">Account Setting</option>
    <option value="">Logout</option>
</select>
<a href=""><img src="https://www.kindmeal.my/images/no_photo_header.png" alt=""></a>
</span>
`
}


// login end 





let postdata = async (obj)=>{

    try {
        let res = await fetch("http://localhost:2020/mealdeal/",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            },
            
        })
        if(res){
            let data = await res.json()
            // console.log(data)
            // alert(data.msg)
            appendData(data)
            
            // if(data.msg === "singup successfull"){
            //     setTimeout(() => {
            //         alert("user is login")
            //         window.location.href="login.html"  
            //     }, 1000);

            // }
        }
    } catch (error) {
        alert("Something went wrong")
        console.log("Something went wrong")
        
    }
}

postdata()


function appendData(data) {
    let alldata  = document.querySelector("#alldata")
    alldata.innerHTML=""
    data.forEach((item)=>{
    // console.log(item)
    let alldata  = document.querySelector("#alldata")
     
    let div = document.createElement("div")
    div.setAttribute("id","all-div" )
    div.innerHTML=` 

          
    <a href=""><img src=${item.img} alt="">    </a>

          <p class="i-name">${item.name} </p>
          
          <span class="i-shop">${item.shop}</span> &nbsp &nbsp
          <span class="i-location">${item.location}</span> 
          <div class="i-title">${item.title} </div><br>  &nbsp &nbsp
        <a data-id=${item._id} class="i-get" href="cafe_detail.html">Get Free Coupon</a> 
        <span class="i-rating">${item.rating}&nbsp Rating</span> <br>
          
        
        
        <div class="food"> 
        <div class="i-img-div"> 
        <img  src="https://www.kindmeal.my/images/icon_egg.png" alt="">
        <img src="https://www.kindmeal.my/images/icon_milk.png" alt="">
        <img src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" alt="">
        </div>
        <div>
        <div class="i-dis">KinderMeal Discount
        <br>

        <span class="dis">${item.discount}</span>
        </div>
         </div>

        <div>
        <div class="i-exp">Expires In
        <br>
        <span class="exp">${item.expire}</span>
        </div>
         </div>

        
        </div>

         
          
          
          
      `
      
      
      alldata.append(div)
    })

    let all_coupon = document.querySelectorAll(".i-get")
    console.log(all_coupon)
    all_coupon.forEach((item)=>{
        item.addEventListener("click",()=>{

       
        let id = item.dataset.id
        console.log(id)
        localStorage.setItem("data-id",id)
        // window.location.href = "./cafe_detail.html"
    })
    })
}    



let search = document.querySelector(".btn-ser")

search.addEventListener("click",()=>{

    let shop = document.querySelector("#shop").value
    let category = document.querySelector("#category").value
    let location = document.querySelector("#location").value

let obj = {
    shop : shop,
    category : category,
    location : location
}


console.log(obj)
searchData(obj)

})


let searchData = async (obj)=>{

    try {
       
        let res = await fetch("http://localhost:2020/mealdeal/get",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
            
        })
       
        if(res){
            let newdata = await res.json()
            // console.log(data)
            // alert(data.msg)
            // appendData(data)
            console.log(newdata)
            if(newdata.length > 0){
            appendData(newdata)
            }else{
               let alldatadiv = document.querySelector("#alldata")
               alldatadiv.innerHTML = ` <h1 id="sorry">Sorry, your search returned no results. <br> 
               Please revise your search criteria and try again.</h1>   ` 
            }
            
            // if(data.msg === "singup successfull"){
            //     setTimeout(() => {
            //         alert("user is login")
            //         window.location.href="login.html"  
            //     }, 1000);

            // }
        }
    } catch (error) {
        alert("Something went wrong")
        console.log("Something went wrong")
        
    }
}







//

//



   
// function search(){
//   let output = document.querySelector("#shop").value 
//   console.log(output)
//   let newdata = bag.filter((item)=>{
//     console.log("abc")
//     return item.title.toLowerCase().includes(output.toLowerCase())
//   })
//   console.log(newdata)
//   appendData(newdata)
// }

// search()



