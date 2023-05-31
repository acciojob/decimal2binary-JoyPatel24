function decimalToBinary(decimal) {
  // Handle special case for 0
  if (decimal === 0) {
    return '0';
  }

  let binary = '';
  while (decimal > 0) {
    // Get the remainder when dividing by 2
    const remainder = decimal % 2;
    // Add the remainder to the binary string
    binary = remainder + binary;
    // Divide the decimal by 2
    decimal = Math.floor(decimal / 2);
  }

  console.log(binary);
}

