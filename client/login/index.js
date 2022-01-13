

function login() {  
    console.log("Start");
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    console.log(userName);
    console.log(password);

    var url = 'http://localhost:8080/api/user/login?username='+ userName + '&password=' + password

    $.ajax({
      url: url,
      type: 'get',
      success: function(response){
        location.replace("http://localhost:8080/main")
      },
      error: function(){
        alert("Username or password is wrong:(");
      }
    });  

    console.log("Finish");
}

