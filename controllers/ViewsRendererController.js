module.exports = {
    getErGuardButton(req,res,next){
        console.log('dsfdg');
        res.redirect('http://127.0.0.1:4000/cookie')
        // res.sendFile('/BUTTONS/ER Guard/ErGuardPlus.html', { root: "./" });
    }
}