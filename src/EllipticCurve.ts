import { method, SmartContract, UInt64 } from 'snarkyjs';

export class EllipticCurve extends SmartContract {
  @method init() {
    console.log("Let's build some hard tech! Crypto is the fucking futureeee!");
  }

  @method ecAdd(
    _x1: UInt64,
    _y1: UInt64,
    _x2: UInt64,
    _y2: UInt64,
    _aa: UInt64,
    _pp: UInt64
  ) {
    console.log([_x1, _y1, _x2, _y2, _aa, _pp]);
  }

  @method ecMul(_k: UInt64, _x: UInt64, _y: UInt64, _aa: UInt64, _pp: UInt64) {
    console.log([_k, _x, _y, _aa, _pp]);
  }
}
