var username = document.getElementById("username")
var password = document.getElementById("password")
var userstored = "admin"
var pswdstored = "12345"
var sub = document.getElementById("formdiv")

function valid(callback,errback){
    if ((username.value == userstored) && (password.value == pswdstored)) {
        callback()
    }
    else{
        errback()
    }
}
function cb(){
    sub.setAttribute("action","todo.html")
}
function eb(){
    alert("Invalid Credentials!!")
}