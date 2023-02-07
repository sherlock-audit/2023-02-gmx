# GMX contest details

- Join [Sherlock Discord](https://discord.gg/MABEWyASkp)
- Submit findings using the issue page in your private contest repo (label issues as med or high)
- [Read for more details](https://docs.sherlock.xyz/audits/watsons)

# Resources

- [Website](https://gmx.io/#/)

# On-chain context

```
DEPLOYMENT: Arbitrum, Avalanche
ERC20: Whitelisted
ERC721: None
ERC777: None
FEE-ON-TRANSFER: None
REBASING TOKENS: None
ADMIN: Restricted
```

## Roles

Roles are managed in the RoleStore, the RoleAdmin has access to grant and revoke any role.

The RoleAdmin will be the deployer initially, but this should be removed after roles have been setup.

After the initial setup:

- Only the Timelock contract should have the RoleAdmin role
- - New roles can be granted by timelock admins with a time delay
- System values should only be set using the Config contract
- No EOA should have a Controller role
- Config keepers and timelock admins could potentially disrupt regular operation through the disabling of features, incorrect setting of values, whitelisting malicious tokens, abusing the positive price impact value, etc
- It is expected that the timelock multisig should revoke the permissions of malicious or compromised accounts
- Oracle signers are expected to accurately report the price of tokens

## Known Issues

- Collateral tokens need to be whitelisted with a configured TOKEN_TRANSFER_GAS_LIMIT
- Rebasing tokens, tokens that change balance on transfer, with token burns, etc, are not compatible with the system and should not be whitelisted
- Order keepers can use prices from different blocks for limit orders with a swap, which would lead to different output amounts
- Order keepers are expected to validate whether a transaction will revert before sending the transaction to minimize gas wastage
- A user can reduce price impact by using high leverage positions, this is partially mitigated with the MIN_COLLATERAL_FACTOR_FOR_OPEN_INTEREST_MULTIPLIER value
- Price impact can be reduced by using positions and swaps and trading across markets, chains, forks, other protocols, this is partially mitigated with virtual inventory tracking
- Virtual IDs must be set on market creation / token whitelisting, if it is set after trading for the token / market is done, the tracking would not be accurate and may need to be adjusted

## 

# Audit Scope

Repository: https://github.com/gmx-io/gmx-synthetics
Branch: `main`
Commit Hash: `8028cb8022b85174be861b311f1082b5b76239df`

## Files in Scope

All files in the `/contracts` folder, excluding:

- /contracts/mock
- /contracts/reader
- /contracts/test
- /contracts/event
- /contracts/deposit/DepositEventUtils.sol
- /contracts/market/MarketEventUtils.sol
- /contracts/order/OrderEventUtils.sol
- /contracts/position/PositionEventUtils.sol
- /contracts/referral/ReferralEventUtils.sol
- /contracts/withdrawal/WithdrawalEventUtils.sol

# About GMX

GMX is a decentralized spot and perpetual exchange that supports low swap fees and minimal price impact trades. Trading is supported by asset pools that earn liquidity providers fees from market making, swap fees and leverage trading.
