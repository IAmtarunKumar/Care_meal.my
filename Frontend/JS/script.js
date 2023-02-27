function one(){
    document.querySelector(".slide1").src="https://www.kindmeal.my/photos/deal/6/657-4063-m.jpg"
}
function two(){
    document.querySelector(".slide1").src="https://www.kindmeal.my/photos/deal/5/506-2350-m.jpg"
}
function three(){
    document.querySelector(".slide1").src="https://www.kindmeal.my/photos/deal/7/725-5225-m.jpg"
}
function four(){
    document.querySelector(".slide1").src="https://www.kindmeal.my/photos/deal/7/700-4802-m.jpg"
}
function five(){
    document.querySelector(".slide1").src="https://www.kindmeal.my/photos/deal/6/617-3503-m.jpg"
}
setInterval(one,2000)
setInterval(two,4000)
setInterval(three,6000)
setInterval(four,8000)
setInterval(five,10000)


function on(){
    document.querySelector(".slide2").src="https://www.kindmeal.my/photos/shop/4/493-3436-m.jpg"
}
function tw(){
    document.querySelector(".slide2").src="https://www.kindmeal.my/photos/shop/6/627-4845-m.jpg"
}
function thre(){
    document.querySelector(".slide2").src="https://www.kindmeal.my/photos/shop/5/592-4483-m.jpg"
}
function fou(){
    document.querySelector(".slide2").src="https://www.kindmeal.my/photos/shop/5/592-4483-m.jpg"
}
function fiv(){
    document.querySelector(".slide2").src="https://www.kindmeal.my/photos/shop/3/392-2513-m.jpg"
}
setInterval(on,2000)
setInterval(tw,4000)
setInterval(thre,6000)
setInterval(fou,8000)
setInterval(fiv,10000)



let username = sessionStorage.getItem("username")
// console.log(username)
let user  = document.querySelector("#user-div")
// console.log(user)




if(username){
user.innerHTML= `
<span>
<a href=""><img src="https://www.kindmeal.my/images/icon_notice.png" alt=""></a>
  </span>
<span>  


<select id="dropdown">
    <option name="a" value="${username}">${username}</option>
    <option class="hover" value="My Coupon">My Coupon</option>
    <option value="Recipes">My Recipes</option>
    <option value="My CareMeal Profile">My CareMeal Profile</option>
    <option value="Update Profile">Update Profile</option>
    <option value="Account Setting">Account Setting</option>
    <option name="Logout" value="Logout">Logout</option>
</select>

<a href=""><img src="https://www.kindmeal.my/images/no_photo_header.png" alt=""></a>
</span>
`
}

const selectElement = document.getElementById("dropdown");
selectElement.addEventListener("click", (event) => {
  const selectedValue = event.target.value;
//   console.log(selectedValue);
if(selectedValue==="Logout"){


    const result = confirm("Are you sure you want to Logout");
if (result === true) {
 
    sessionStorage.removeItem("username")
    localStorage.removeItem("token")
    window.location="index.html"

} else {
 
    console.log("x")

}

   
}


if(selectedValue==="My Coupon"){
    setInterval(() => {
        window.location.href="./HTML/cart.html"
    }, 1000);
}


});

