import {
  DeployArgs,
  Field,
  Group,
  method,
  // PrivateKey,
  SmartContract,
  Scalar,
  State,
  state,
} from 'snarkyjs';

import keccak256 from 'keccak256';

export class Wallet extends SmartContract {
  @state(Field) GX = State<Field>();
  @state(Field) GY = State<Field>();

  @state(Field) PublicKeyX = State<Field>();
  @state(Field) PublicKeyY = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.GX.set(
      Field(
        '0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798'
      )
    );
    this.GY.set(
      Field(
        '0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8'
      )
    );

    this.PublicKeyX.set(
      Field(
        '89565891926547004231252920425935692360644145829622209833684329913297188986597'
      )
    );
    this.PublicKeyY.set(
      Field(
        '12158399299693830322967808612713398636155367887041628176798871954788371653930'
      )
    );
  }

  @method init() {
    console.log('Wallet SmartContract running crypto brooo!');
  }

  @method generateStealthAddress(secret: Field) {
    console.log(secret);

    //  s*G = S
    const ellipticCurveStartingPoint = new Group({
      x: this.GX.get(),
      y: this.GY.get(),
    });
    const oneTimePublicData = ellipticCurveStartingPoint.scale(
      Scalar.ofFields([secret])
    );

    //  s*P = q
    const recipientPublicKey = new Group({
      x: this.PublicKeyX.get(),
      y: this.PublicKeyY.get(),
    });
    const sharedSecret = recipientPublicKey.scale(Scalar.ofFields([secret]));
    console.log('Shared secret: ', sharedSecret);
    let keccak = keccak256('Hola');
    console.log('Keccak: ', keccak);
    console.log('keccak 2: ', keccak.toString());

    // hash(sharedSecret)

    // hash value to public key

    // derive new public key
    // EllipticCurve.ecAdd(PublicKeyX, PublicKeyY, Qx, Qy, AA, PP);
    // generate stealth address

    return oneTimePublicData;
  }
}
