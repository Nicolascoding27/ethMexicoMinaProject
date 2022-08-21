import { Wallet } from './Wallet';

import {
  isReady,
  Mina,
  Party,
  PrivateKey,
  PublicKey,
  shutdown,
} from 'snarkyjs';

function createLocalBlockchain() {
  const Local = Mina.LocalBlockchain();
  Mina.setActiveInstance(Local);

  return Local.testAccounts[0].privateKey;
}

async function localDeploy(
  zkAppInstance: Wallet,
  zkAppPrivateKey: PrivateKey,
  deployerAccount: PrivateKey
) {
  const txn = await Mina.transaction(deployerAccount, () => {
    Party.fundNewAccount(deployerAccount);
    zkAppInstance.deploy({
      zkappKey: zkAppPrivateKey,
    });
    zkAppInstance.init();
  });

  await txn.send().wait();
}

describe('Wallet', () => {
  let deployerAccount: PrivateKey;
  let zkAppAddress: PublicKey;
  let zkAppPrivateKey: PrivateKey;

  beforeEach(async () => {
    await isReady;
    deployerAccount = createLocalBlockchain();
    zkAppPrivateKey = PrivateKey.random();
    zkAppAddress = zkAppPrivateKey.toPublicKey();
  });

  afterAll(async () => {
    setTimeout(shutdown, 0);
  });

  // Add all the shit you want to test here guys! Att JP.

  it('Creates and deploys the Wallet smart contract', async () => {
    const zkAppInstance = new Wallet(zkAppAddress);
    await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);

    // Some assertion after deploy...
  });

  it('generates stealth address for the smart contract', async () => {
    const zkAppInstance = new Wallet(zkAppAddress);
    await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);

    const txn = await Mina.transaction(deployerAccount, () => {
      // zkAppInstance.generateStealthAddress();
      // zkAppInstance.sign(zkAppPrivateKey);
    });
    await txn.send().wait();
  });
});
