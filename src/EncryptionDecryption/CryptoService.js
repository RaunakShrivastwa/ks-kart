// src/utils/CryptoService.js
import CryptoJS from 'crypto-js';

class CryptoService {
  constructor(secretKey) {
    this.secretKey = secretKey || 'default_secret_key_123'; // You can pass a custom one too
  }

  encrypt(data) {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decrypt(cipherText) {
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (err) {
      console.error('Decryption failed:', err);
      return null;
    }
  }
}

export default new CryptoService('your_secret_key_123'); // Exporting a singleton instance
