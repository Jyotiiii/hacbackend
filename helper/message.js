/** 
 * @description All the Error messages that needed to be sent to Admin or App
 * @type {Object}
*/
module.exports.ErrorMessage = Object.freeze({
    TICKET_ALREADY_EXIST: 'this ticket is already exist .',
    TICKET_NOT_FOUND: 'ticket not found',
    IPFS_NOT_STORE: "file is not store in ipfs",
    SOMETHING_WRONG: "something went wrong"
});

/** 
 * @description All the Success messages that needed to be sent to App or Admin
 * @type {Object}
*/
module.exports.SuccessMessage = Object.freeze({
    IPFS_STORE_SUCCESSFULLY: "file is store in ipfs successfully",

    SIGNUP_SUCCESSFULLY: "Thanks, You have successfully signed up.",
    LOGIN_SUCCESS: 'Your login is successful.',
    CUSTOMER_VERIFY: 'Customer verified successfully',
    FORGET_SUCCESS: 'A password link has been sent to your registered ID.',
    RESET_SUCCESS: 'Your password was successfully changed.',
    PRODUCT_LIST_FETCH: 'Successfully fetched product list.',
    USER_LIST_FETCH: 'Successfully fetched user list.',
});