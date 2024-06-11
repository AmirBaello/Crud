var uniqueidV, firstnameV, middlenameV, surnameV, emailV, addressV;

function readFom() {
    uniqueidV = document.getElementById("Uid").value;
    firstnameV = document.getElementById("Fname").value;
    middlenameV = document.getElementById("Mname").value;
    surnameV = document.getElementById("Sname").value;
    emailV = document.getElementById("Eadd").value;
    addressV = document.getElementById("address").value;
    console.log(uniqueidV, firstnameV, middlenameV, surnameV, emailV, addressV);
}

// Insert Data //

document.getElementById("insert").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uniqueidV)
        .set({
            uniqueid: uniqueidV,
            firstname: firstnameV,
            middlename: middlenameV,
            surname: surnameV,
            emailaddress: emailV,
            address: addressV,
        });
    alert("Data Inserted");
    document.getElementById("Uid").value = "";
    document.getElementById("Fname").value = "";
    document.getElementById("Mname").value = "";
    document.getElementById("Sname").value = "";
    document.getElementById("Eadd").value = "";
    document.getElementById("address").value = "";
};

// Read //

document.getElementById("read").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uniqueidV)
        .on("value", function (snap) {
            document.getElementById("Uid").value = snap.val().uniqueid;
            document.getElementById("Fname").value = snap.val().firstname;
            document.getElementById("Mname").value = snap.val().middlename;
            document.getElementById("Sname").value = snap.val().surname;
            document.getElementById("Eadd").value = snap.val().emailaddress;
            document.getElementById("address").value = snap.val().address;
        });
};

// Update //

document.getElementById("update").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uniqueidV)
        .update({
            uniqueid: uniqueidV,
            firstname: firstnameV,
            middlename: middlenameV,
            surname: surnameV,
            emailaddress: emailV,
            address: addressV,
        });
    alert("Data Update");
    document.getElementById("Uid").value = "";
    document.getElementById("Fname").value = "";
    document.getElementById("Mname").value = "";
    document.getElementById("Sname").value = "";
    document.getElementById("Eadd").value = "";
    document.getElementById("address").value = "";
};

// Delete //

document.getElementById("delete").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uniqueidV)
        .remove();
    alert("Data Deleted");
    document.getElementById("Uid").value = "";
    document.getElementById("Fname").value = "";
    document.getElementById("Mname").value = "";
    document.getElementById("Sname").value = "";
    document.getElementById("Eadd").value = "";
    document.getElementById("address").value = "";
};