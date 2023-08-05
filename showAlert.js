const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const colorText = (text, colornb) => `\x1b[${colornb}m${text}\x1b[0m`;

rl.question(
  colorText(
    "Hi, would you mind please giving me a feedback on my lab? Many thanks! Please type 'Enter' to start ",
    36
  ),
  () => {
    console.log(colorText('App is running...', 32));
    rl.close();
  }
);
