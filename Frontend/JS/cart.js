



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
    <button class="cart-btn">Live Coupon</button>
  </div>

    `

    artical.append(div)
})

}

