export declare const OrderType: {
    MarketSwap: number;
    LimitSwap: number;
    MarketIncrease: number;
    LimitIncrease: number;
    MarketDecrease: number;
    LimitDecrease: number;
    StopLossDecrease: number;
    Liquidation: number;
};
export declare function createOrder(fixture: any, overrides: any): Promise<void>;
export declare function executeOrder(fixture: any, overrides: any): Promise<void>;
export declare function handleOrder(fixture: any, overrides?: {}): Promise<void>;
export declare function executeLiquidation(fixture: any, overrides: any): Promise<void>;
//# sourceMappingURL=order.d.ts.map