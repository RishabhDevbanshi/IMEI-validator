const validateIMEI = require('../helper/validateIMEI');

const checkIMEI = (req, res) => {
  const imei_to_check = req.body.IMEI;
  const result = validateIMEI(imei_to_check);
  if (result[0] === true) res.send("Valid IMEI");
  else
    res.send(
      `Wrong IMEI ,you can try to replace the check digit with ${result[1]}, thus making IMEI as : ${result[2]}`
    );
};

module.exports = checkIMEI;
