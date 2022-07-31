import sha256 from 'crypto-js/sha256';

export const hash256 = (password: string) => {
   return sha256(password).toString();
}

export const compareHash = (plainText: string, hashText: string) => {
    const hash= hash256(plainText);
    return hash === hashText;
}