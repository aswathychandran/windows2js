function clickaction(){
    var user=document.getElementById("uname").value
    alert(user)
}
function change(){
    var user=document.getElementById("sname").value
alert(user)

}
function validate(){
    var user=document.getElementById("name").value
    //alert(user)
    
    if(user==""|| user==null){
        alert("name can't be empty")
        return false;
    }
    var password=document.getElementById("password").value
    if(password==""|| password.length<6){
        alert("password can't be empty or length should be in size")
        return false;

    }
}