/**
 * VietQR API - Generate bank transfer QR code
 * https://img.vietqr.io/image/{BANK}-{ACCOUNT}-compact.png
 */

const BANK_NAME = process.env.NEXT_PUBLIC_BANK_NAME;
const BANK_CODE = process.env.NEXT_PUBLIC_BANK_CODE;
const BANK_ACCOUNT = process.env.NEXT_PUBLIC_BANK_ACCOUNT;
const BANK_ACCOUNT_NAME = process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME;

function getBankConfig() {
  if (!BANK_CODE || !BANK_ACCOUNT || !BANK_ACCOUNT_NAME) {
    throw new Error(
      "Missing bank config. Set NEXT_PUBLIC_BANK_CODE, NEXT_PUBLIC_BANK_ACCOUNT, NEXT_PUBLIC_BANK_ACCOUNT_NAME in .env.local"
    );
  }
  return {
    bankName: BANK_NAME || "Ngân hàng",
    bankCode: BANK_CODE,
    bankAccount: BANK_ACCOUNT,
    bankAccountName: BANK_ACCOUNT_NAME,
  };
}

export interface VietQROptions {
  amount: number;
  addInfo: string;
}

/**
 * Build VietQR image URL for bank transfer
 */
export function buildVietQRUrl(options: VietQROptions): string {
  const { bankCode, bankAccount } = getBankConfig();
  const params = new URLSearchParams();
  params.set("amount", String(options.amount));
  params.set("addInfo", options.addInfo);
  return `https://img.vietqr.io/image/${bankCode}-${bankAccount}-compact.png?${params.toString()}`;
}

export function getBankInfo() {
  const { bankName, bankAccount, bankAccountName } = getBankConfig();
  return {
    bank: bankName,
    account: bankAccount,
    accountName: bankAccountName,
  };
}
