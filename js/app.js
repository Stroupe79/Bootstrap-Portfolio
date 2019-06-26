$(document).ready(function () {



    $("#submit").click(function (event) {
        event.preventDefault();
        console.log("click")
        var submit = {
        fName: $("#fName").val(),
        lName: $("#lName").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        address: $("#address").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        zip: $("#zip").val()
        };
        console.log($("#zip"))

        console.log(submit);
    });


});