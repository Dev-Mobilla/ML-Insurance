$(document).ready(function() {
    console.log('READY!!');
    
    // document.getElementById("er-guard-plus").addEventListener("click", setCookie);
    $('#er-guard-plus').click(setCookie)

})

function setCookie() {
    console.log('dsfdg');

    $.ajax({
        url: "/cookie",
        type: "GET",
        // dataType: 'json',
        success: function(result) {

            console.log(result);


            window.location.href = result
            // let er_guard = {
            //     "ProductID": "INS-000002"
            // }
        
            // let json_string = JSON.stringify(er_guard);
        
            // document.cookie = "MLInsurance=" + json_string
        
            // console.log('cookie outside')
            // console.log(document.cookie);
        }
    })
}