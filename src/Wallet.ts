import {
  method,
  // PrivateKey,
  SmartContract,
  // state,
  UInt64,
} from 'snarkyjs';

// import { EllipticCurve } from './EllipticCurve';

export class Wallet extends SmartContract {
  @method init() {
    console.log('Wallet SmartContract running crypto brooo!');
  }

  @method generateStealthAddress(secret: UInt64) {
    console.log(secret);

    //  s*G = S
    // EllipticCurve.ecMul(secret, GX, GY, AA, PP);
    //  s*P = q

    // hash(sharedSecret)

    // hash value to public key

    // derive new public key
    // EllipticCurve.ecAdd(PublicKeyX, PublicKeyY, Qx, Qy, AA, PP);
    // generate stealth address

    // return public key coordinates and stealthAddress
  }
}
