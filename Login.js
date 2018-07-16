function checkLogin() {
    var user = document.getElementById("txtUsrnameId").value;
    var pwd = document.getElementById("pwdId").value;

    $.get("Login.json",function(data,status) {
        if(data.username==user && data.password==pwd){
            window.location = "Quiz.html";
        }
        else {
            alert("Username or Password is incorrect!");
            document.getElementById("txtUsrnameId").value = "";
            document.getElementById("pwdId").value = "";
        }
    });
    return false;
}