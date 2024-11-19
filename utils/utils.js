import { NumberFormatePreviewOptions } from "./enum";

export const formatNumber = (number, regionalNumber) => {
  const regionalNumberFormatter = new Intl.NumberFormat(
    NumberFormatePreviewOptions["English - United States"],
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  return regionalNumberFormatter?.format(number) ?? "0.00";
};
