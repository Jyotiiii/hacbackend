const ticketModel = require('../models/ticketModel');

const { commonResponse: response } = require('../helper/commonResponseHandler');
const { ErrorMessage } = require('../helper/message');
const { SuccessMessage } = require('../helper/message');
const { ErrorCode } = require('../helper/statusCode');
const { SuccessCode } = require('../helper/statusCode');
// const axios = require('axios');
// const FormData = require('form-data');
// const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const fs = require('fs');
const { create } = require('ipfs-http-client');
const ipfs = create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });



// createEvent
createEvent = async (req, res) => {
    try {

        // console.log('26 >>>>>>>',req.body)
        console.log('38 >>>>>>>', req.body)
        console.log("ipfs0s", req.file)
        const ipfsUrl = await uploadIpfs(req.file)
        console.log("ipfsss", ipfsUrl)
        const doc = {
            ticketId: req.body._id,
            ticketname: req.body.ticketname,
            description: req.body.description,
            noOfTickets: req.body.noOfTickets,
            URL: ipfsUrl
        }
        // const result = await haiku.insertOne(doc);
        const saveRes = await new ticketModel(doc).save();

        let ipfsToken = {
            image: "https://ipfs.io/ipfs/" + ipfsUrl // hash
        }
        if (saveRes) {
            let result1 = {
                ticketId: saveRes._id,
                ticketname: saveRes.ticketname,
                description: saveRes.description,
                noOfTickets: saveRes.noOfTickets,
                URL: ipfsToken

            };
            response(res, SuccessCode.SUCCESS, result1, SuccessMessage.DATA_SAVED);
        }
    }
    catch (error) {
        console.log(error)
        response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG);
    }
}
getProfile = async (req, res) => {
    try {
        // console.log("data", req.headers.tokenid);
        // const result = await ticketModel.findOne({ ticketId: req.headers.ticketname });
        const result = await ticketModel.find();
        console.log("result", result);
        if (!result) {
            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.TICKET_NOT_FOUND);
        } else {
            response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_FOUND);
        }
    }
    catch (error) {
        response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG);
    }
}

// uploadIpfs: async (req, res) => {
//     try {

//         // console.log("req======>>", req.file)
//         const filename = req.file;
//         console.log("filenamedddd", filename);
//         let form = new FormData();
//         console.log("jyoti sharma111")
//         // const filename = JSON.stringify(filename)
//         // const fileName = req.file.filename;
//         console.log("filename5", filename.buffer);
//         console.log("filename7", filename.originalname);


//         form.append('file', filename.buffer, filename.originalname);
//         console.log("data----", form)
//         return axios
//             .post(url, form, {
//                 maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
//                 headers: {
//                     'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
//                     pinata_api_key: '5fb6c023dd18de9d6308',
//                     pinata_secret_api_key: 'c2fa1f640e018c2c0f64656527eb394365e5edfee1380ab416185807bfbae912'
//                 }
//             })
//             .then(function (result) {
//                 console.log("-----response data--", response.data);
//                 // return response;
//                 response(res, SuccessCode.SUCCESS, result, SuccessMessage.IPFS_STORE_SUCCESSFULLY);

//             })
//             .catch(function (error) {
//                 console.log("------res-----", error);
//                 // return error;
//                 response(res, ErrorCode.SOMETHING_WRONG, error, ErrorMessage.IPFS_NOT_STORE);

//             });
//     } catch (error) {
//         console.log("------res-----", error);
//         response(res, ErrorCode.SOMETHING_WRONG, error, ErrorMessage.SOMETHING_WRONG);
//     }
// },

uploadIpfs = async (file) => {
    try {
        // console.log("req======>>", req.file)
        // const fileName = req.file.filename;
        // const filePath = req.file.path;
        console.log("file", file);
        const fileName = file.filename;
        const filePath = file.path;
        const fileHash = await addFile(fileName, filePath);
        await deleteFile(filePath);
        let tokenData = {
            image: "https://ipfs.io/ipfs/" + fileHash // hash
        }
        console.log("Line no 39====tokenId==>>", tokenData)
        let ipfsRes = await ipfsupload(tokenData);
        console.log("33-======>>>", ipfsRes)
        return ipfsRes;
        // response(res, SuccessCode.SUCCESS, { ipfsHash: ipfsRes, fileHash: fileHash, imageUrl: tokenData.image }, SuccessMessage.DETAIL_GET);
    } catch (e) {
        console.log("====36", e)
        // response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG)
    }

},
    ipfsUpload = async (req, res) => {
        try {
            console.log("req======>>", req.file)
            const fileName = req.file.filename;
            const filePath = req.file.path;
            // console.log("file", file);
            // const fileName = file.filename;
            // const filePath = file.path;
            const fileHash = await addFile(fileName, filePath);
            await deleteFile(filePath);
            let tokenData = {
                name: req.body.name,
                description: req.body.description,
                image: "https://ipfs.io/ipfs/" + fileHash // hash
            }
            console.log("Line no 39====tokenId==>>", tokenData)
            let ipfsRes = await ipfsupload(tokenData);
            console.log("33-======>>>", ipfsRes)
            // return ipfsRes;
            response(res, SuccessCode.SUCCESS, { ipfsHash: ipfsRes, fileHash: fileHash, imageUrl: tokenData.image }, SuccessMessage.DETAIL_GET);
        } catch (e) {
            console.log("====36", e)
            response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG)
        }

    },

    ipfsupload = async (tokenId, tokenData) => {
        try {
            const { cid } = await ipfs.add({ path: tokenId, content: JSON.stringify(tokenData) }, { cidVersion: 1, hashAlg: 'sha2-256' });
            console.log('cid', cid.toString());
            return cid.toString()
        } catch (error) {
            console.log('error', error);
        }
    },


    addFile = async (fileName, filePath) => {
        const file = fs.readFileSync(filePath);
        const fileAdded = await ipfs.add({ path: fileName, content: file }, { cidVersion: 1, hashAlg: 'sha2-256' });
        console.log("193======>>>", fileAdded)
        const fileHash = fileAdded.cid.toString();
        console.log("Line no 167=======>>>", fileHash)
        return fileHash;
    },

    deleteFile = async (filePath) => {
        fs.unlink(filePath, (deleteErr) => {
            if (deleteErr) {
                console.log("Error: failed to delete the file", deleteErr);
            }
        })
    }


module.exports = {
    createEvent,
    getProfile,
    ipfsUpload
}





// var body1 = JSON.stringify(filename);





