let detail = async () => {
  try {
    let res = await fetch("http://localhost:2020/kind/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res) {
      let data = await res.json();
      console.log(data);
      appendData(data);
    }
  } catch (error) {
    console.log(error);
  }
};

detail();

let appendData = (data) => {
  let artical = document.querySelector("#kind_data");
  console.log(artical);

  data.forEach((item) => {
    console.log(item);

    let div = document.createElement("div");
    div.setAttribute("class","sub-div");

    div.innerHTML = ` 
    
    <div style="display: flex;  align-items: center;">

    <div> <img class="user-img" src="https://www.kindmeal.my/photos/member/23/23028-s.jpg" alt=""></div>

    <div class="k-item">
    <span >${item.name}</span>
     <br>
      <span>13-feb-2023</span>
       </div>
    <div class="k-button">
    <button>View</button>
    </div>
 </div>
<hr>
 <div  >
 <a href="">
 <img class="k-food-img" src="${item.img}" alt="">
  </a>
 </div>

 <div class="k-icon">
 <img width="10%" src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg" alt=""> 3
 <img width="10%" src="https://www.kindmeal.my/images/icon_camera_darkgrey.png" alt=""> 1
 <img width="10%" src="https://www.kindmeal.my/images/icon_comment_darkgrey.png" alt="">0

 </div>

 <div class="k-title">${item.title}</div>
 <hr>
 <div class="k-add">


<div><i class="fa-regular fa-user fa-2x"></i></div>
<div> 

 <div>${item.shop}</div>
 
 <div>${item.add}</div>
 </div>

</div>

   
    <br>
    `;

    artical.append(div);
  });
};



let moment = document.querySelector("#moment")
moment.addEventListener("click",()=>{
    let artical = document.querySelector("#kind_data");
    artical.innerHTML="" 
    momentfun();
    moment.style.color="red"
  
})

let deal = document.querySelector("#deal")
deal.addEventListener("click",()=>{
    let artical = document.querySelector("#kind_data");
    artical.innerHTML="" 
    dealfun();
    deal.style.color="red"
  
})



//pending

let foll = document.querySelector("#foll")

// console.log(moment,deal,foll)




let momentfun = async () => {
    try {
      let res = await fetch("http://localhost:2020/kind/moment", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (res) {
        let data = await res.json();
       
        appendData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };



  
//deal
let dealfun = async () => {
    try {
      let res = await fetch("http://localhost:2020/kind/review", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (res) {
        let data = await res.json();
       
        appendData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };



  //search

let shop = document.querySelector("#serach").value

let loc = document.querySelector("#location").value

 let obj = {
    shop : shop,
    location : loc
 }

  console.log(obj)

  let serbtn = document.querySelector("#ser")
  serbtn.addEventListener("click",()=>{
      searchData(obj)
  })


let searchData = async (obj)=>{

    try {
       
        let res = await fetch("http://localhost:2020/kind/search",{
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
               let alldatadiv = document.querySelector("#kind_data")
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




  
  
 
  