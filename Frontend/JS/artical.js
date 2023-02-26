



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

