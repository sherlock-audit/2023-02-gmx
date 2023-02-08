declare const func: {
    ({ getNamedAccounts, deployments, gmx }: {
        getNamedAccounts: any;
        deployments: any;
        gmx: any;
    }): Promise<void>;
    skip({ gmx, network }: {
        gmx: any;
        network: any;
    }): Promise<boolean>;
    tags: string[];
    dependencies: string[];
};
export default func;
//# sourceMappingURL=deployAndConfigureMarkets.d.ts.map