const validateIMEI = (imei) => {
  if (imei.length != 15) return false;

  let IMEIsum = 0;

  for (let i = imei.length - 1; i >= 0; i--) {
    let digit = parseInt(imei[i]);
    if (i & 1) digit = digit * 2;
    while (digit) {
      IMEIsum += digit % 10;
      digit = Math.floor(digit / 10);
    }
  }

  if (IMEIsum % 10 === 0) return [true];

  IMEIsum = IMEIsum - parseInt(imei[imei.length - 1]);
  IMEIsum = IMEIsum % 10;
  let correctIMEI = imei.substring(0, 14);
  correctIMEI += 10 - IMEIsum;
  return [false, 10 - IMEIsum, correctIMEI];
};

module.exports = validateIMEI;
