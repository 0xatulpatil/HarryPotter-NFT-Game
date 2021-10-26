const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('HarryPotter');
  const gameContract = await gameContractFactory.deploy(

  ["Harry Potter", "Hermione Granger", "Albus Dumbledore"],       // Names
  ["https://i.imgur.com/5iy2sSM.png", // Images
  "https://i.imgur.com/zuDPvQf.png", 
  "https://i.imgur.com/1L0KWKR.png"],
  [600, 200, 500],                    // HP values
  [300, 400, 700],
  "Voldemort",
  "https://i.imgur.com/uTk80ou.png",
  10000,
  25   
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted NFT #3");

  txn = await gameContract.attackBoss();
  await txn.wait();


  txn = await gameContract.attackBoss();
  await txn.wait();
  

  console.log("Done deploying and minting!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();