/**
 * Created by Binh on 12/05/2017.
 */
function Submit() {
 var name = document.getElementById("name").value;
 var email = document.getElementById("email").value;
 var phone = document.getElementById("phone").value;
 var message = document.getElementById("message").value;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'http://localhost:8000/save-contact',
        data: JSON.stringify({
            name: name,
            email: email,
            message: message,
            phone: phone
        }),
        success: function (response) {
            if (response.success) {
                //alert(response.message);
            }
        }
    });
}
