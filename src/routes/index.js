
const{Router} = require ('express');
const router = Router();

router.get('/',(req, res)=>{
//  console.log("index work")
 res.render('index.hbs');
   
});


router.post('/new-contact', (req, res) => {
    console.log(req.body);
    res.send('receided')
});

module.exports=router;


// router.post('/new-contact', (req, res) => {
//     const newContact = {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         phone: req.body.phone
//     }
//     db.ref('contacts').push(newContact);
//     res.redirect('/');
// });