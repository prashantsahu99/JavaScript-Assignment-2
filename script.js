function addRow() {
          
    var myName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    
    let ans= isvalidate(myName,email,mobile);

    if(ans){

        localStorage.setItem("Name",myName);
        localStorage.setItem("Email",email);
        localStorage.setItem("Mobile",mobile);

        let name=localStorage.getItem("Name");
        let mail=localStorage.getItem("Email");
        let number=localStorage.getItem("Mobile");

        var tbody=document.getElementById("table_body");

        var row=document.createElement('tr');

        var col1=document.createElement('td');
        var text1= document.createTextNode(name)
        col1.appendChild(text1);
        row.appendChild(col1);

        var col2=document.createElement('td');
        var text2= document.createTextNode(mail)
        col2.appendChild(text2);
        row.appendChild(col2);

        var col3=document.createElement('td');
        var text3= document.createTextNode(number)
        col3.appendChild(text3);
        row.appendChild(col3);

        tbody.appendChild(row);
        document.getElementById("MyForm").reset();
    }

}


function isvalidate(myName,email,mobile){
    return validate_name(myName) && (validate_email(email) && validate_mobile(mobile));

}

function validate_name(myName){
    let namereg=/^[A-Za-z ]*$/;
    if(myName===""){
        alert("Name not Empty");
        return false;
    }
    else if(namereg.test(myName)){
        return true;
    }
    else{
        alert("Name can't contain Numbers & Special characters");
        return false;
    }
}

function validate_email(email){
    let mailreg=/^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/;
    if(email===""){
        alert("email can't empty");
        return false;
    }
    else if(mailreg.test(email)){
        return true;
    }
    else{
        alert("Email invalid");
        return false;
    }
}

function validate_mobile(mobile){
    let mobilereg=/^\d{10}$/;

    if(mobile ===""){
        alert("Mobile can't Empty");
        return false;
    }
    else if(mobilereg.test(mobile)){
        return true;
    }
    else{
        alert("Mobile Number is Invalid");
        return false;
    }
}
