import type { RunInput, FunctionRunResult } from "../generated/api";
import { DiscountApplicationStrategy } from "../generated/api";

const EMPTY_DISCOUNT: FunctionRunResult = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

export function run(input: RunInput): FunctionRunResult {
  // define targets

  // define conditions
  const DISCOUNTED_ITEMS: FunctionRunResult = {
    discountApplicationStrategy: DiscountApplicationStrategy.First,
    discounts: [
      {
        targets: [],
        value: {
          percentage: {
            value: 10,
          },
        },
        message: "10% OFF",
      },
    ],
  };

  return DISCOUNTED_ITEMS;
}
