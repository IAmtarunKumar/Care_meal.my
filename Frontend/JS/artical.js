
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



// let id = localStorage.getItem("data-id")
// console.log(id)


let detail =async ()=>{

    try {
        let res = await fetch("http://localhost:2020/artical/",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
    
        if(res){
            let data = await res.json()
            // console.log(data)
            appendData(data)
        }
        
    } catch (error) {
        console.log(error)
    }

}

detail()


let appendData = (data)=>{
    let artical = document.querySelector(".main-artical")
    console.log(artical)



data.forEach((item)=>{
console.log(item)


let div = document.createElement("div")
div.setAttribute("class","art-div")

   
    div.innerHTML = ` 
    <div><a href="">
    <img  src="${item.img}" alt="">
     </a>
    </div>
    <div> 
    <h1>${item.des}</h1>
    <p>${item.sub}</p>
    <button>View Video</button>
    <span>${item.date}</span>
    </div>
   
    <br>
    `

    artical.append(div)
})

}

