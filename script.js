//your JS code here. If required.
let fname = document.getElementById("fName");
        let lname = document.getElementById("lName");
        let pnumber = document.getElementById("pNumber");
        let email = document.getElementById("eMail");

        function Submit(){
            alert(`First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${pnumber.value} Email ID: ${email.value}`);
        }