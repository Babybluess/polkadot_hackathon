export const pool_abis = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "IsCreator", type: "error" },
  { inputs: [], name: "IsNotBorrower", type: "error" },
  { inputs: [], name: "IsNotEndingPool", type: "error" },
  { inputs: [], name: "IsNotExistPool", type: "error" },
  { inputs: [], name: "IsNotOwner", type: "error" },
  { inputs: [], name: "Isinsufficient", type: "error" },
  { inputs: [], name: "PoolIsBorrowed", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "poolIndex",
        type: "uint8",
      },
      {
        components: [
          { internalType: "uint8", name: "pairId", type: "uint8" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "address", name: "lender", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          {
            internalType: "uint256",
            name: "collateral_amount",
            type: "uint256",
          },
          { internalType: "uint256", name: "expire", type: "uint256" },
          { internalType: "uint256", name: "profit", type: "uint256" },
          { internalType: "bool", name: "isDeleted", type: "bool" },
          {
            internalType: "enum ETHPool.PoolStatus",
            name: "pool_status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct ETHPool.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "poolIndex",
        type: "uint8",
      },
      { indexed: false, internalType: "bool", name: "isDeleted", type: "bool" },
    ],
    name: "CancelPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "address", name: "lendToken", type: "address" },
          { internalType: "address", name: "collateralToken", type: "address" },
          { internalType: "uint256", name: "lendAmount", type: "uint256" },
        ],
        indexed: false,
        internalType: "struct ETHPool.PairToken",
        name: "pair",
        type: "tuple",
      },
    ],
    name: "CreatePairToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "uint8", name: "pairId", type: "uint8" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "address", name: "lender", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          {
            internalType: "uint256",
            name: "collateral_amount",
            type: "uint256",
          },
          { internalType: "uint256", name: "expire", type: "uint256" },
          { internalType: "uint256", name: "profit", type: "uint256" },
          { internalType: "bool", name: "isDeleted", type: "bool" },
          {
            internalType: "enum ETHPool.PoolStatus",
            name: "pool_status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct ETHPool.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    name: "CreatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "poolIndex",
        type: "uint8",
      },
      {
        components: [
          { internalType: "uint8", name: "pairId", type: "uint8" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "address", name: "lender", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          {
            internalType: "uint256",
            name: "collateral_amount",
            type: "uint256",
          },
          { internalType: "uint256", name: "expire", type: "uint256" },
          { internalType: "uint256", name: "profit", type: "uint256" },
          { internalType: "bool", name: "isDeleted", type: "bool" },
          {
            internalType: "enum ETHPool.PoolStatus",
            name: "pool_status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct ETHPool.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    name: "EditPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "poolIndex",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ETHPool.LiquidationType",
        name: "healthRatioStatus",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint32[2]",
        name: "tokenPrice",
        type: "uint32[2]",
      },
    ],
    name: "Liquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "poolIndex",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "Repay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "WithdrawColateral",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint8", name: "poolIndex", type: "uint8" },
      {
        internalType: "uint256",
        name: "estimated_collateral_amount",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "poolIndex", type: "uint8" }],
    name: "cancelPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "lendToken", type: "address" },
          { internalType: "address", name: "collateralToken", type: "address" },
          { internalType: "uint256", name: "lendAmount", type: "uint256" },
        ],
        internalType: "struct ETHPool.PairToken",
        name: "pair",
        type: "tuple",
      },
    ],
    name: "createPairToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint8", name: "pairId", type: "uint8" },
          { internalType: "string", name: "name", type: "string" },
          {
            internalType: "uint256",
            name: "collateral_amount",
            type: "uint256",
          },
          { internalType: "uint256", name: "expire", type: "uint256" },
          { internalType: "uint256", name: "profit", type: "uint256" },
        ],
        internalType: "struct ETHPool.NewPool",
        name: "newPool",
        type: "tuple",
      },
    ],
    name: "createPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "deposite",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "poolIndex", type: "uint8" },
      { internalType: "uint8", name: "profit", type: "uint8" },
    ],
    name: "editPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "poolIndex", type: "uint8" }],
    name: "expireLendingTime",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "getDetailPair",
    outputs: [
      {
        components: [
          { internalType: "address", name: "lendToken", type: "address" },
          { internalType: "address", name: "collateralToken", type: "address" },
          { internalType: "uint256", name: "lendAmount", type: "uint256" },
        ],
        internalType: "struct ETHPool.PairToken",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "ownBalances",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "pairTokenList",
    outputs: [
      { internalType: "address", name: "lendToken", type: "address" },
      { internalType: "address", name: "collateralToken", type: "address" },
      { internalType: "uint256", name: "lendAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "poolList",
    outputs: [
      { internalType: "uint8", name: "pairId", type: "uint8" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "address", name: "lender", type: "address" },
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "uint256", name: "collateral_amount", type: "uint256" },
      { internalType: "uint256", name: "expire", type: "uint256" },
      { internalType: "uint256", name: "profit", type: "uint256" },
      { internalType: "bool", name: "isDeleted", type: "bool" },
      {
        internalType: "enum ETHPool.PoolStatus",
        name: "pool_status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "poolIndex", type: "uint8" }],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];