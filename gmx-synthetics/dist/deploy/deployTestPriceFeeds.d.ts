declare const func: {
    ({ getNamedAccounts, deployments }: {
        getNamedAccounts: any;
        deployments: any;
    }): Promise<void>;
    skip({ network }: {
        network: any;
    }): Promise<any>;
    dependencies: string[];
    tags: string[];
};
export default func;
//# sourceMappingURL=deployTestPriceFeeds.d.ts.map