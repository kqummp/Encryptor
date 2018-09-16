# Encryptor

[![Build Status](https://travis-ci.org/kqummp/Encryptor.svg?branch=master)](https://travis-ci.org/kqummp/Encryptor)
[![Coverage Status](https://coveralls.io/repos/github/kqummp/Encryptor/badge.svg?branch=master)](https://coveralls.io/github/kqummp/Encryptor?branch=master)

加密密码专用

对源字符串加盐值1后取md5，再对md5值加盐值2取sha256值，获得最终字符串

## Usage

```js
var encrypt = require('../index.js');

var str = "qrs0301";

var encrypted = encrypt.encrypt(str);//对字符串加密

console.log(encrypted);

console.log(encrypt.judge(str,encrypted));//判断密码是否与数据库中的相同

```
