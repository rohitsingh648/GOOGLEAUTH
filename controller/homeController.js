
module.exports.home= async function(req,res){

    console.log("Controller for home loaded");
    try{
        await res.render('home',{
            title:"Auth Project"
        });

    }catch(err){
        console.error('Erro loading home Page Data',err);

    }
};