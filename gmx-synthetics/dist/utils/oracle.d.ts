export declare const TOKEN_ORACLE_TYPES: {
    ONE_PERCENT_PER_MINUTE: string;
};
export declare function signPrice({ signer, salt, oracleBlockNumber, blockHash, token, tokenOracleType, precision, minPrice, maxPrice, }: {
    signer: any;
    salt: any;
    oracleBlockNumber: any;
    blockHash: any;
    token: any;
    tokenOracleType: any;
    precision: any;
    minPrice: any;
    maxPrice: any;
}): Promise<any>;
export declare function signPrices({ signers, salt, oracleBlockNumber, blockHash, token, tokenOracleType, precision, minPrices, maxPrices, }: {
    signers: any;
    salt: any;
    oracleBlockNumber: any;
    blockHash: any;
    token: any;
    tokenOracleType: any;
    precision: any;
    minPrices: any;
    maxPrices: any;
}): Promise<any[]>;
export declare function getSignerInfo(signerIndexes: any): string;
export declare function getCompactedPrices(prices: any): any[];
export declare function getCompactedPriceIndexes(priceIndexes: any): any[];
export declare function getCompactedPrecisions(precisions: any): any[];
export declare function getCompactedOracleBlockNumbers(blockNumbers: any): any[];
export declare function getOracleParams({ oracleSalt, oracleBlockNumbers, blockHashes, signerIndexes, tokens, tokenOracleTypes, precisions, minPrices, maxPrices, signers, priceFeedTokens, }: {
    oracleSalt: any;
    oracleBlockNumbers: any;
    blockHashes: any;
    signerIndexes: any;
    tokens: any;
    tokenOracleTypes: any;
    precisions: any;
    minPrices: any;
    maxPrices: any;
    signers: any;
    priceFeedTokens: any;
}): Promise<{
    signerInfo: string;
    tokens: any;
    compactedOracleBlockNumbers: any[];
    compactedPrecisions: any[];
    compactedMinPrices: any[];
    compactedMinPricesIndexes: any[];
    compactedMaxPrices: any[];
    compactedMaxPricesIndexes: any[];
    signatures: any[];
    priceFeedTokens: any;
}>;
//# sourceMappingURL=oracle.d.ts.map