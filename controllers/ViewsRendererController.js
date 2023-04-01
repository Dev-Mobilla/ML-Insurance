module.exports = {
    getErGuardButton(req,res,next){
        console.log('dsfdg');
        res.sendFile('/BUTTONS/ER Guard/ErGuardPlus.html', { root: "./" });
    }
}