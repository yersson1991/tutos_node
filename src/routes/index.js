
const{Router} = require ('express');
const router = Router();

router.get('/',(req, res)=>{
//  console.log("index work")
 res.render('index.hbs');
   
});
module.exports=router;