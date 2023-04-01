

document.getElementById("er-guard-plus").addEventListener("click", setCookie);

function setCookie() {
    let er_guard = {
        "TypeLogin": "INSURANCE",
        "ProductID": "INS-000002"
    }

    let json_string = JSON.stringify(er_guard);

    document.cookie = "data=" + json_string

    console.log('cookie outside')
    console.log(document.cookie);
}
