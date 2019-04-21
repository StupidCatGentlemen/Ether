const axios = require("axios");

const HOST = "http://localhost:5001";

const address = "0x5588C63e0e0538fC6B7D76f9AbD6a4f7c349E1B5";
module.exports.getMyAdress = async function (req, res) {
    const URL = HOST + "/api/v1/address";
    data = await axios.get(URL);

    console.log(data.data);
};


module.exports.listAllUnsettleChannels = async function (req, res) {
    const URL = HOST + "/api/v1/channels";
    const data = await axios.get(URL);

    console.log(data.data);
};

/**
 * Lists all unsettled channels to the this address
 */
module.exports.listAllUnsettledChannelForThisAddress = async function (req, res) {
    const address = '';
    const URL = HOST + "/api/v1/channels/" + address;
    const data = await axios.get(URL3);

    res.send(data.data);
};


/**
 * Payment
 */


module.exports.doTransaction = async function (req, res) {
    // const URL = HOST + '/api/v1/payments/' + sender + '/' + receiver;
    /*const data1 = await axios.post(

    "http://localhost:5001/api/v1/payments/0x396764f15ed1467883A9a5B7D42AcFb788CD1826/0xb2432F6dE2AA2F5D8F8993395F5Af62AB5dB8324",

    data: {
      amount: 2
    }
  );

  console.log(data1.data1);
*/
    const senderToken = '0x396764f15ed1467883A9a5B7D42AcFb788CD1826';
    const receiver = '0xb2432F6dE2AA2F5D8F8993395F5Af62AB5dB8324'
    const URL = HOST + '/api/v1/payments/' + sender + '/' + receiver;
    data1 = await axios({
        method: 'post',
        url: URL,
        data: {
            amount: '1'
        }
    });

    console.log(data1.data);

};