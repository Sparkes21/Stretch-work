const getPassword = () => { return (process.argv.slice(2))[0];}

const replaceLetter = (password, letterToReplace, replacement) => {
  let replaced = '';
  for (let index in password) {
    if (password[index] === letterToReplace) {
      replaced += replacement;
    } else {
      replaced += password[index];
    }
  }
  return replaced;
};

const obfuscate = (password) => {
  let newPassword = password
  
  if (newPassword.includes('a')) {
    newPassword = replaceLetter(newPassword, 'a', '4');
  }
  if (newPassword.includes('e')) {
    newPassword = replaceLetter(newPassword, 'e', '3');
  }
  if (newPassword.includes('o')) {
    newPassword = replaceLetter(newPassword, 'o', '0');
  }
  if (newPassword.includes('l')) {
    newPassword = replaceLetter(newPassword, 'l', '1');
  }
  console.log(newPassword)
  return newPassword;
};
  


obfuscate(getPassword());