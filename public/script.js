window.onload = function () {

    document.getElementById("er-guard-plus").addEventListener("click", setCookie);

}
function setCookie() {
    let er_guard = {
        "ProductID": "INS-000002"
    }

    let json_string = JSON.stringify(er_guard);

    document.cookie = "MLInsurance=" + json_string

    console.log('cookie outside')
    console.log(document.cookie);
}