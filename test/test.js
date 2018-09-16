const encryptor = require('../index.js');

const expect = require('chai').expect;

describe('encrypt', function(){
  it('encryptTest#1', function(){
    let raw = "asdasd";

    let result = encryptor.encrypt(raw);

    expect(result).to.be.equal("f513a52287fe65ef0c50eafedb9a3ad34bd71a0cf32112417808885395352c1a");
  });

  it('judgeTest#1', function(){
    let raw = "asdasd";

    let result = encryptor.judge(raw, encryptor.encrypt(raw));

    expect(result).to.be.true;
  });

  it('judgeTest#2', function(){
    let raw = "asdasd";

    let result = encryptor.judge("asdasdf", encryptor.encrypt(raw));

    expect(result).to.be.false;
  });
});
