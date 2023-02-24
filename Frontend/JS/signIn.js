let form  = document.querySelector("form")

form.addEventListener("submit",(event)=>{
event.preventDefault()




let obj = {
    name : form.name.value,
    email : form.email.value,
    password : form.password.value,
    dob : form.dob.value,
    country : form.country.value,
    state : form.state.value,

}

console.log(obj)
postdata(obj)
})




let postdata = async (obj)=>{

    try {
        let res = await fetch("http://localhost:2020/users/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        if(res){
            let data = await res.json()
            alert(`Welcome to CareMeal.my Dear ${data.name} `)

            
            if(data.msg === "singup successfull"){
                setTimeout(() => {
                   
                    window.location.href="login.html"  
                }, 1000);

            }
        }
    } catch (error) {
        alert("Something went wrong")
        console.log("Something went wrong")
        
    }
}


