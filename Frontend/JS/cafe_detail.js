




let id = localStorage.getItem("data-id")
console.log(id)


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
            console.log(data)
            appendData(data)
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
    price.innerHTML=`${Math.floor(Math.random() * 60)}`
    let discount = document.querySelector(".discount")
    discount.innerHTML =data[0].discount

}



