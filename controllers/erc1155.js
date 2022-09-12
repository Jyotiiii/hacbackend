/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';
const express = require('express')
const app = express();
const { Gateway, Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const { buildCAClient, registerAndEnrollUser, enrollAdmin } = require('./test-application/javascript/CAUtil.js');
const { buildCCPOrg1, buildWallet } = require('./test-application/javascript/AppUtil.js');
const { commonResponse: response } = require('../helper/commonResponseHandler');
const { ErrorMessage } = require('../helper/message');
const { SuccessMessage } = require('../helper/message');
const { ErrorCode } = require('../helper/statusCode');
const { SuccessCode } = require('../helper/statusCode');
var nodemailer = require('nodemailer');
const {google } =require('googleapis')
const channelName = 'mychannel';
const chaincodeName = 'kyc';
const mspOrg1 = 'Org1MSP';
const walletPath = path.join(__dirname, 'wallet');
const org1UserId = 'Org1';
const QRCode = require('qrcode')

// const org1UserId = 'eDUwOTo6Q049cGVyc29uMSxPVT1jbGllbnQsTz1IeXBlcmxlZGdlcixTVD1Ob3J0aCBDYXJvbGluYSxDPVVTOjpDTj1jYS5vcmcxLmV4YW1wbGUuY29tLE89b3JnMS5leGFtcGxlLmNvbSxMPUR1cmhhbSxTVD1Ob3J0aCBDYXJvbGluYSxDPVVT';
// const { create } = require('ipfs-http-client');
// const fs = require('fs');
// const ipfs = create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
function prettyJSONString(inputString) {
    return JSON.stringify(JSON.parse(inputString), null, 2);
}
const axios = require('axios');
const { verify } = require('crypto');


/**
 * Function Name :RegisterAdmin
 * Description   : register the admin
 *
 * @return response
*/

const RegisterAdmin = async (req, res) => {
  console.log("llllll")
  try{ // build an in memory object with the network configuration (also known as a connection profile)
    const ccp = buildCCPOrg1();
  
    // build an instance of the fabric ca services client based on
    // the information in the network configuration
    const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');
  
    // setup the wallet to hold the credentials of the application user
    const wallet = await buildWallet(Wallets, walletPath);
  
    // in a real application this would be done on an administrative flow, and only once
    const res1 = await enrollAdmin(caClient, wallet, mspOrg1);
    console.log("response", res1);
    res.status(200).send({ status :200,message: "transaction has been submitted successfully" });
  }catch (error) {
    res.status(500).send({ status :500,result : error,message: "something went wrong" });
  }
 



}

/**
* Function Name :RegisterUser
* Description   : register the user
*
* @return response
*/
const RegisterUser = async (req, res) => {
  console.log('mmmmmmmmmmm');
  try { // build an in memory object with the network configuration (also known as a connection profile)
      const ccp = buildCCPOrg1();
      console.log('mmmmmmmmmmm', req.body);

      // build an instance of the fabric ca services client based on
      // the information in the network configuration
      const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');

      // setup the wallet to hold the credentials of the application user
      const wallet = await buildWallet(Wallets, walletPath);

      // in a real application this would be done only when a new user was required to be added
      // and would be part of an administrative flow
      await registerAndEnrollUser(caClient, wallet, mspOrg1, req.body.userName, 'org1.department1');
      res.status(200).send({ status :200,message: "transaction has been submitted successfully" });
    } catch (error) {
    res.status(500).send({ status :500,result : error,message: "something went wrong" });
  }


}

/**
* Function Name :grandAccess
* Description   : accress to  the user
*
* @return response
*/

const grandAccess = async (req, res) => {

    // build an in memory object with the network configuration (also known as a connection profile)
    const ccp = buildCCPOrg1();

    console.log("body", req.body)
    // build an instance of the fabric ca services client based on
    // the information in the network configuration
    const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');

    // setup the wallet to hold the credentials of the application user
    const wallet = await buildWallet(Wallets, walletPath);


    // Create a new gateway instance for interacting with the fabric network.
    // In a real application this would be done as the backend server session is setup for
    // a user that has been verified.
    try {
        const gateway = new Gateway();

        try {
            // setup the gateway instance
            // The user will now be able to create connections to the fabric network and be able to
            // submit transactions and query. All transactions submitted by this gateway will be
            // signed by this user using the credentials stored in the wallet.
            await gateway.connect(ccp, {
                wallet,
                identity: org1UserId,
                discovery: { enabled: true, asLocalhost: true } // using asLocalhost as this gateway is using a fabric network deployed locally
            });

            // Build a network instance based on the channel where the smart contract is deployed
            const network = await gateway.getNetwork(channelName);

            // Get the contract from the network.
            const contract = network.getContract(chaincodeName);
            // console.log("jyotii", contract)

            // var result = await contract.evaluateTransaction('ClientAccountID');
            await contract.submitTransaction('grandAccess', req.body.name, req.body.emailadress,req.body.phonenumber,req.body.accessduration,req.body.documentdownload);

            console.log('Transaction has been submitted');
            res.status(200).send({ status :200,message: "transaction has been submitted successfully" });

        } finally {
            // Disconnect from the gateway when the application is closing
            // This will close all connections to the network
            gateway.disconnect();
        }
    } catch (error) {
        console.error(`******** FAILED to run the application: ${error}`);
        res.status(500).send({ status :500,result : error,message: "something went wrong" });


    }

}



/**
* Function Name :grandAccess
* Description   : accress to  the user
*
* @return response
*/

const QueryReceiverInfo = async (req, res) => {

  // build an in memory object with the network configuration (also known as a connection profile)
  const ccp = buildCCPOrg1();

  console.log("body", req.body)
  // build an instance of the fabric ca services client based on
  // the information in the network configuration
  const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');

  // setup the wallet to hold the credentials of the application user
  const wallet = await buildWallet(Wallets, walletPath);


  // Create a new gateway instance for interacting with the fabric network.
  // In a real application this would be done as the backend server session is setup for
  // a user that has been verified.
  try {
      const gateway = new Gateway();

      try {
          // setup the gateway instance
          // The user will now be able to create connections to the fabric network and be able to
          // submit transactions and query. All transactions submitted by this gateway will be
          // signed by this user using the credentials stored in the wallet.
          await gateway.connect(ccp, {
              wallet,
              identity: org1UserId,
              discovery: { enabled: true, asLocalhost: true } // using asLocalhost as this gateway is using a fabric network deployed locally
          });

          // Build a network instance based on the channel where the smart contract is deployed
          const network = await gateway.getNetwork(channelName);

          // Get the contract from the network.
          const contract = network.getContract(chaincodeName);
          // console.log("jyotii", contract)

          // var result = await contract.evaluateTransaction('ClientAccountID');
          kycdata=await contract.evaluateTransaction('QueryReceiverInfo',req.body.emailadress);
          console.log('kycdata', kycdata);
          const buf = Buffer.from(kycdata, 'utf8');
          var value = buf.toString();
          console.log("value", value)
          console.log('Transaction has been submitted');
          res.status(200).send({ status :200,result:value,message: "transaction has been submitted successfully" });
         
      } finally {
          // Disconnect from the gateway when the application is closing
          // This will close all connections to the network
          gateway.disconnect();
      }
  } catch (error) {
      console.error(`******** FAILED to run the application: ${error}`);
      res.status(500).send({ status :500,result : error,message: "something went wrong" });


  }

}

/**
 * Function Name :RegisterAdmin
 * Description   : register the admin
 *
 * @return response
*/
const emailverify =async (req,res)=>{
console.log("kkkkj",req.body)

const CLIENT_ID='589609909298-ruc9qojtcdcmpp3752ol7bso3gkfbej3.apps.googleusercontent.com'
const CLIENT_SECRET='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'
const REFRESH_TOKEN='1//04dshL6xTM1z6CgYIARAAGAQSNgF-L9IrNCyzeB4lVgz1_NQgvznQzMohw8EwnfFyBDMl3fF6qn43T-S3TAWgt11IZPaLMVxF9A'
const REDIRECT_URI='https://developers.google.com/oauthplayground'

const oAuthClient = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuthClient.setCredentials({refresh_token:REFRESH_TOKEN})
  try{
    console.log("kkkkj",req.body)
    const opts = {
      errorCorrectionLevel: 'H',
      type: 'terminal',
      quality: 0.95,
      margin: 1,
      color: {
       dark: '#208698',
       light: '#FFF',
      },
     }
     const qrImage = await QRCode.toString('Hi testing QR code', opts)
    console.log("jjjjjj",qrImage)
    // var token = buf.toString('hex');
    // console.log("token",token)
    const accessToken = await oAuthClient.getAccessToken()
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type:'OAuth2',
        user: 'bhawanjyoti.207@gmail.com',
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken:REFRESH_TOKEN,
        accessToken:accessToken
      }
    });
    // console.log("token",transporter)

    var mailOptions = {
      from: ' jyoti Sharma <bhawanjyoti.207@gmail.com>',
      to: req.body.receiver,
      subject: 'Document Verifications',
      text:'Hi,\n\n' +
      'Jyoti has shared his/her documents with you.Click the below link to access the documents or scan the QR code\n\n' +
       'http://' + 'localhost:4200' + '/authentication' + '\n\n' +
       '<img src=https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8>'+'\n\n'+
       'for support please 011*** ***890.\n'+
       'support email support***@standardbank.co.za',
      //  html:
      //  html:
      

    };
    console.log("mailOptions",mailOptions)
    await transporter.sendMail(mailOptions, function(error, info){
      // console.log("jjjjj")
      if (error) {
        console.error(`******** FAILED to run the application: ${error}`);
        res.status(500).send({ status :500,result : error,message: " not suceessfully mail send" });
      } else {
        console.log('Email sent: ' + info.response);
        // res.send(info.response, SuccessCode.SUCCESS, { result: "suceessfully mail send"}, SuccessMessage.DETAIL_GET);
        res.status(200).send({ status :200,result : info.response,message: "suceessfully mail send" });
      }
    });
 }catch(error){
  console.error(`******** FAILED to run the application: ${error}`);
  res.status(500).send({ status :500,result : error,message: "not suceessfully mail send" });

  }
}

const email = async ()=>{
  const CLIENT_ID='589609909298-ruc9qojtcdcmpp3752ol7bso3gkfbej3.apps.googleusercontent.com'
  const CLIENT_SECRET='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'
  const REFRESH_TOKEN='1//04dshL6xTM1z6CgYIARAAGAQSNgF-L9IrNCyzeB4lVgz1_NQgvznQzMohw8EwnfFyBDMl3fF6qn43T-S3TAWgt11IZPaLMVxF9A'
  const REDIRECT_URI='https://developers.google.com/oauthplayground'
  
  const oAuthClient = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
  oAuthClient.setCredentials({refresh_token:REFRESH_TOKEN})
  console.log("jjjjjj")
  try{
    console.log("jjjjjj")
    // var token = buf.toString('hex');
    // console.log("token",token)
    const accessToken = await oAuthClient.getAccessToken()
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type:'OAuth2',
        user: 'bhawanjyoti.207@gmail.com',
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken:REFRESH_TOKEN,
        accessToken:accessToken
      }
    });
    // console.log("token",transporter)

    var mailOptions = {
      from: ' jyoti Sharma <bhawanjyoti.207@gmail.com>',
      to: 'bhaskarshr@live.com',
      subject: 'Document Verifications',
      text:'Hi,\n\n' +
      'Jyoti has shared his/her documents with you.Click the below link to access the documents or scan the QR code\n\n' +
       'http://' + 'localhost' + '/reset/' + '\n\n' +
       'for support please 011*** **** or.\n'+
       'support email support**@stand**ank.co.za',
      html :"<img src=https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8>"

    };
    console.log("mailOptions",mailOptions)
    await transporter.sendMail(mailOptions, function(error, info){
      console.log("jjjjj")
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
 }catch(error){
    return error
  }
}
module.exports = {
  email : email,
  RegisterAdmin : RegisterAdmin,
  RegisterUser : RegisterUser,
  grandAccess : grandAccess,
  emailverify : emailverify,
  QueryReceiverInfo:QueryReceiverInfo
}
// emailverify()







































































































































































































































































































// exports.Mint = async (req, res) => {

//     try {
//         // build an in memory object with the network configuration (also known as a connection profile)
//         const ccp = buildCCPOrg1();

//         console.log("jyotii", req.body)

//         // build an instance of the fabric ca services client based on
//         // the information in the network configuration
//         const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');

//         // setup the wallet to hold the credentials of the application user
//         const wallet = await buildWallet(Wallets, walletPath);


//         // Create a new gateway instance for interacting with the fabric network.
//         // In a real application this would be done as the backend server session is setup for
//         // a user that has been verified.
//         const gateway = new Gateway();

//         try {
//             // setup the gateway instance
//             // The user will now be able to create connections to the fabric network and be able to
//             // submit transactions and query. All transactions submitted by this gateway will be
//             // signed by this user using the credentials stored in the wallet.
//             await gateway.connect(ccp, {
//                 wallet,
//                 identity: org1UserId,
//                 discovery: { enabled: true, asLocalhost: true } // using asLocalhost as this gateway is using a fabric network deployed locally
//             });
//             // Build a network instance based on the channel where the smart contract is deployed
//             const network = await gateway.getNetwork(channelName);
//             // Get the contract from the network.
//             const contract = network.getContract(chaincodeName);
//             const numberIds = await typeCast(req.body.ids)
//             console.log("numberid", numberIds)
//             const numberValues = await typeCast(req.body.values)
//             console.log("numbervalue", numberValues);
//             const mint = await contract.submitTransaction('MintBatch', req.body.account, JSON.stringify(numberIds), JSON.stringify(numberValues));
//             // await contract.submitTransaction('MintBatch', '$P1', JSON.stringify([10, 20, 30, 40, 50, 60]), JSON.stringify([100, 200, 300, 150, 100, 100]));
//             console.log('Transaction has been submitted', mint);
//             response(res, SuccessCode.SUCCESS, { result: "suceessfully minting" }, SuccessMessage.DETAIL_GET);

//         } finally {
//             // Disconnect from the gateway when the application is closing
//             // This will close all connections to the network
//             gateway.disconnect();
//         }
//     } catch (error) {
//         console.error(`******** FAILED to run the application: ${error}`);
//         response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG)
//     }

// }