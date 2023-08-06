const hre = require('hardhat')

async function main() {
  const SwapRouter02 = await hre.ethers.getContractFactory('SwapRouter02')
  const swapRouter02 = await SwapRouter02.deploy(
    process.env.V2FACTORY,
    process.env.V3FACTORY,
    process.env.POSITION_MANAGER,
    process.env.WETH
  )

  await swapRouter02.deployed()

  console.log('SwapRouter02 deployed to:', swapRouter02.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })