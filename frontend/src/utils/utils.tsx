export const stringHasNumber = (string: string) => {
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) >= 0 || string.charAt(i) <= 9) return true;
  }
  return false;
};

export const stringHasSpecial = (string: string) => {
    for (let i =0; i < string.length; i++) {
        console.log(string.charAt(i))
        console.log(string.charCodeAt(i))
        if ((string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 64)  && !(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) )
            return true;
    }
    return false;
};
