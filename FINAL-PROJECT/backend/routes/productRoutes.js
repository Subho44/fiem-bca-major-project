const  express = require('express');
const router = express.Router();
const pctrl = require("../controllers/productController");

router.post('/',pctrl.createproduct);
router.get('/',pctrl.viewproduct);
router.get('/:id',pctrl.oneproduct);
router.put('/:id',pctrl.updateproduct);
router.delete('/:id',pctrl.deleteproduct);

module.exports = router