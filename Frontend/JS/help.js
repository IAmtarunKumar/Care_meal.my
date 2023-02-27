
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

