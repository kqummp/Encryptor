"use strict";
/**
 ** Encrypt Module
 **
 ** @version 0.0.1
 **
 */

const encrypt = module.exports;

const crypto = require('crypto');

const salt1 = "hwfhc";

const salt2 = "lrworkshop";

/**
 ** Encrypt
 **
 ** @param string
 **
 */

encrypt.encrypt = function(string){
  let md5 = crypto.createHash('md5');
  let salted = string + salt1;
  let middleware = md5.update(salted).digest('hex');
  let final = crypto.createHmac('sha256', middleware).update(salt2).digest('hex');

  return final;
}

/**
 ** Judge
 **
 ** @param string
 ** @param encrypted_string
 **
 */

encrypt.judge = function(string, encrypted_string){
  let test_string = encrypt.encrypt(string);
  if (test_string === encrypted_string){
    return true;
  } else {
    return false;
  }
}
