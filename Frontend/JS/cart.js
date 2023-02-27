

// login start 

let username = sessionStorage.getItem("username")

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



// let id = localStorage.getItem("data-id")
// console.log(id)


let detail =async ()=>{

    try {
        let res = await fetch("http://localhost:2020/cart/",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
    
        if(res){
            let data = await res.json()
            console.log(data)
            appendData(data)
        }
        
    } catch (error) {
        console.log(error)
    }

}

detail()


let appendData = (data)=>{
    let artical = document.querySelector("#cart-data")
    console.log(artical)



data.forEach((item)=>{
console.log(item)


let div = document.createElement("div")
div.setAttribute("class","art-div")

   
    div.innerHTML = ` 
    <div >
    <a href=""><img id="cart-img" src="${item.img}" alt=""></a>
  </div>

  <div style="width: 80%">
    <p class="cart-shop">${item.shop}</p>
    <p class="cart-name">${item.name}</p>
    <span class="cart-dis">${item.discount}% Off</span>
    <span>Active</span>
    <br><br>
    <button class="cart-btn" data-id=${item._id}  >Live Coupon</button>
  </div>

    `

    artical.append(div)
})

let cart_qr = document.querySelectorAll(".cart-btn")

cart_qr.forEach((item)=>{
    item.addEventListener("click",()=>{
        let id = item.dataset.id
        
        console.log(id)
        localStorage.setItem("QRCode_id", "id")
        
    })
})

}

