function validate(){
    let user=document.getElementById('user').value;

    let mobile=document.getElementById("mobile").value;

    if(user==""){
        document.getElementById('user_message').innerHTML="Pleace Enter User Name"
    }
    if(user.length<4){
        document.getElementById("user_message").innerHTML="Pleace Enter Min 4 Characters"
    }
    if(mobile==null || mobile.length<=10){
        document.getElementById("mobile_message").innerHTML="Pleace Enter Mobile Number"
    }


return false
}