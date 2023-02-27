
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





let id = localStorage.getItem("data-id")
// console.log(id)


let detail =async (id)=>{

    try {
        let res = await fetch(`http://localhost:2020/mealdeal/detail/${id}`,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
    
        if(res){
            let data = await res.json()
            // console.log(data)
            appendData(data)
//post in cart fun
            
        }
        
    } catch (error) {
        console.log(error)
    }

}

detail(id)


let appendData = (data)=>{
    let name = document.querySelector(".name")
    name.innerHTML=data[0].name
    let img = document.querySelector(".img")
    img.setAttribute("src",data[0].img)
    let price = document.querySelector(".price")
    price.innerHTML=`RM ${Math.floor(Math.random() * 60)}.00`
    let discount = document.querySelector(".discount")
    discount.innerHTML =data[0].discount

    let coupon = document.querySelector(".coupon-btn")
    coupon.setAttribute("data-id",data[0]._id)


}





let coupon = document.querySelectorAll(".coupon-btn")

coupon.forEach((item)=>{
    item.addEventListener("click",()=>{
      let id = item.dataset.id
      console.log(id)
      cart_id(id)
      
    })
  })


//search by id
let cart_id =async (id)=>{

    try {
        let res = await fetch(`http://localhost:2020/mealdeal/detail/${id}`,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
    
        if(res){
            let data = await res.json()
            console.log(data)
          
            // appendData(data)
            post_in_cart(data[0])
//post in cart fun
            
        }
        
    } catch (error) {
        console.log(error)
    }

}





let post_in_cart =async (data)=>{

    try {
        let res = await fetch(`http://localhost:2020/cart/`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    
        if(res){
            let data = await res.json()
            console.log(data)
            if(data.msg=="something went wrong"){
                alert(data.msg)
            }else{
                alert("Coupon is Added")
            }
            // appendData(data)
           
        }
        
    } catch (error) {
        console.log(error)
    }

}




