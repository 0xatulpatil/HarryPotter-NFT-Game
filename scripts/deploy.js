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