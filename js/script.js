function myfun(){
    var X = document.forms["myform"]["user"].value;
    if (X==""){
        alert ("pls input user name");
        return false;
    }
   
}