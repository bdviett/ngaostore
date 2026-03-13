"use client";

import Image from "next/image";
import { buildVietQRUrl, getBankInfo } from "@/lib/vietqr";
import Link from "next/link";

interface QRPaymentProps {
  amount: number;
  orderId: string;
}

export default function QRPayment({ amount, orderId }: QRPaymentProps) {
  const bankInfo = getBankInfo();
  const qrUrl = buildVietQRUrl({ amount, addInfo: orderId });

  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-secondary">Thanh toán chuyển khoản</h3>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl bg-white p-2">
          <Image
            src={qrUrl}
            alt="QR chuyển khoản"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="flex-1 space-y-2 text-sm text-gray-500">
          <p>
            <span className="font-semibold text-secondary">Ngân hàng:</span> {bankInfo.bank}
          </p>
          <p>
            <span className="font-semibold text-secondary">STK:</span> {bankInfo.account}
          </p>
          <p>
            <span className="font-semibold text-secondary">Chủ TK:</span> {bankInfo.accountName}
          </p>
          <p>
            <span className="font-semibold text-secondary">Nội dung CK:</span>{" "}
            <code className="rounded bg-primary/20 px-2 py-1 font-mono font-bold text-primary">
              {orderId}
            </code>
          </p>
          <p>
            <span className="font-semibold text-secondary">Miễn phí giao hàng</span> cho đơn từ 100.000đ
          </p>
        </div>
      </div>
      <p className="mt-4 rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
        ⚠️ Nội dung chuyển khoản PHẢI ghi đúng mã đơn hàng (VD: NG260311-1234) <br />
        Hỗ trợ: <Link href="tel:0988012895" target="_blank" className="text-primary hover:underline">0988 012 895</Link>
      </p>
    </div>
  );
}
