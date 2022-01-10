function login() {  
    console.log("Start")  
    $.get("json", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    console.log("Finish")
}