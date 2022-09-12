const router = require("express").Router();
const nft = require("../../controllers/erc1155.js")
console.log("nftjjjjjjjj", nft.RegisterAdmin);
// var multer = require('multer');
// console.log()
// express --views=hbs 
// const fs = require('fs');
// const getStream = require('get-stream')
// const upload = multer()




// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname)
//     }
// })
// var upload = multer({ storage: storage })



/**
 * @swagger
 * /api/v1/erc/RegisterAdmin:
 *   post:
 *     tags:
 *       - ERC1155 DASHBOARD
 *     description: Check for Social existence and give the access Token 
 *     consumes:
 *       - "multipart/form-data"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Requested data found.
 *       404:
 *         description: This user does not exist.
 *       500:
 *         description: Internal Server Error
 */
router.post('/RegisterAdmin', nft.RegisterAdmin); //done



/**
 * @swagger
 * /api/v1/erc/RegisterUser:
 *   post:
 *     tags:
 *       - ERC1155 DASHBOARD
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userName
 *         description: userName
 *         in: formData
 *         required: true  
 *     responses:
 *       200:
 *         description: Requested data found.
 *       404:
 *         description: This user does not exist.
 *       500:
 *         description: Internal Server Error
 */
// router.post(,); //done
router.post('/RegisterUser', nft.RegisterUser);


/**
 * @swagger
 * /api/v1/erc/grandAccess:
 *   post:
 *     tags:
 *       - ERC1155 DASHBOARD
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: name
 *         in: formData
 *         required: true  
 *       - name: address
 *         description: address
 *         in: formData
 *         required: true 
 *       - name: id
 *         description: id
 *         in: formData
 *         required: true 
 *       - name: value
 *         description: value
 *         in: formData
 *         required: true 
 *       - name: size
 *         description: size
 *         in: formData
 *         required: true 
 *     responses:
 *       200:
 *         description: Requested data found.
 *       404:
 *         description: This user does not exist.
 *       500:
 *         description: Internal Server Error
 */
// router.post(,); //done
router.post('/grandAccess', nft.grandAccess);

/**
 * @swagger
 * /api/v1/erc/emailverify:
 *   post:
 *     tags:
 *       - ERC1155 DASHBOARD
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: receiver
 *         description: receiver
 *         in: formData
 *         required: true  
 *     responses:
 *       200:
 *         description: Requested data found.
 *       404:
 *         description: This user does not exist.
 *       500:
 *         description: Internal Server Error
 */
// router.post(,); //done
router.post('/emailverify', nft.emailverify);



module.exports = router;




