
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



let form  = document.querySelector("form")

form.addEventListener("submit",(event)=>{
event.preventDefault()




let obj = {

    email : form.email.value,
    password : form.password.value,

}

console.log(obj)
postdata(obj)
})




let postdata = async (obj)=>{

    try {
        let res = await fetch("http://localhost:2020/users/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"

            },
            body : JSON.stringify(obj)
        })
       


    





        if(res){
            let data = await res.json()
            console.log(data)
            alert(data.msg)
            localStorage.setItem("token" , data.token)
            sessionStorage.setItem("username", data.name)
            
            if(data.msg === "login successful"){
            setTimeout(() => {
                
                window.location.href="../index.html"  
            }, 1000);

        }
        }
    } catch (error) {
        alert("Wrong Credentials")
        
    }
}


