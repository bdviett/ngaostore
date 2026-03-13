# ngao.store – Checkout System Plan (SPA)

## 1. Overview

Website **ngao.store** hiện đang là **Single Page Application (SPA)** và chưa có hệ thống backend để xử lý đơn hàng.

Vì vậy chức năng mua hàng sẽ được triển khai theo mô hình **Manual Checkout**:

* Khách hàng nhập thông tin giao hàng
* Website tạo **mã đơn hàng ngẫu nhiên**
* Website hiển thị **QR chuyển khoản ngân hàng**
* Nội dung chuyển khoản chứa **mã đơn hàng**
* Người bán kiểm tra sao kê ngân hàng để xác nhận đơn
* Người bán gửi hàng thủ công

Mục tiêu:

* Triển khai nhanh
* Không cần backend
* Không cần database
* Dễ mở rộng sau này

---

# 2. System Architecture

Luồng hoạt động:

```
Khách hàng
   ↓
Chọn sản phẩm
   ↓
Điền thông tin giao hàng
   ↓
Generate Order ID
   ↓
Hiển thị QR chuyển khoản
   ↓
Khách chuyển khoản
   ↓
Người bán kiểm tra nội dung chuyển khoản
   ↓
Xác nhận đơn
   ↓
Gửi hàng
```

Toàn bộ logic xử lý nằm ở **frontend**.

---

# 3. Checkout Flow

## Step 1 – Product Page

Ví dụ trang sản phẩm:

```
Sim ghép Bison New
Giá: 120.000đ

[Mua ngay]
```

Khi bấm **Mua ngay** → chuyển sang trang `/checkout`.

---

# 4. Checkout Form

Trang checkout yêu cầu khách nhập thông tin:

```
Họ tên *
Số điện thoại *
Địa chỉ nhận hàng *
Ghi chú (optional)
```

Validation:

* Tất cả trường bắt buộc
* Số điện thoại đúng định dạng
* Không cho submit nếu thiếu thông tin

---

# 5. Generate Order ID

Mỗi đơn hàng cần có mã đơn để:

* ghi vào nội dung chuyển khoản
* người bán tra cứu trong sao kê ngân hàng

Format đề xuất:

```
NG + yymmdd + random
```

Ví dụ:

```
NG240311-4821
```

### Function tạo Order ID

```javascript
export function generateOrderId() {
  const now = new Date()

  const date =
    now.getFullYear().toString().slice(2) +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0")

  const random = Math.floor(Math.random() * 9000) + 1000

  return `NG${date}-${random}`
}
```

---

# 6. Payment Method

Phương thức thanh toán duy nhất:

```
Chuyển khoản ngân hàng
```

Thông tin hiển thị:

```
Ngân hàng: MB Bank
Số tài khoản: 123456789
Chủ tài khoản: Ngao Store
```

Nội dung chuyển khoản:

```
NG240311-4821
```

---

# 7. QR Payment

Website sẽ tự động tạo **QR chuyển khoản**.

API tạo QR:

```
https://img.vietqr.io/image/{BANK}-{ACCOUNT}-compact.png
```

Ví dụ:

```
https://img.vietqr.io/image/MB-123456789-compact.png?amount=120000&addInfo=NG240311-4821
```

Parameters:

| Parameter | Meaning               |
| --------- | --------------------- |
| amount    | số tiền thanh toán    |
| addInfo   | nội dung chuyển khoản |

---

# 8. Checkout Page UI

Layout gợi ý:

```
--------------------------------
ĐƠN HÀNG: NG240311-4821
--------------------------------

Sản phẩm:
Sim ghép Bison New

Số lượng: 1

Tổng tiền:
120.000đ

--------------------------------
THÔNG TIN GIAO HÀNG

Nguyễn Văn A
090xxxxxxx
Hà Nội

--------------------------------
THANH TOÁN

[ QR CODE ]

STK: 123456789
Ngân hàng: MB Bank

Nội dung:
NG240311-4821

--------------------------------
Sau khi chuyển khoản vui lòng
chụp màn hình gửi Zalo
--------------------------------
```

---

# 9. Local Order Storage

Đơn hàng có thể lưu vào **localStorage** để:

* tránh mất dữ liệu khi reload
* cho phép khách tra lại đơn

Ví dụ dữ liệu:

```json
[
  {
    "id": "NG240311-4821",
    "name": "Nguyễn Văn A",
    "phone": "090xxxxxxx",
    "address": "Hà Nội",
    "product": "Sim ghép Bison New",
    "price": 120000,
    "status": "pending"
  }
]
```

---

# 10. Notify Seller (Optional)

Có thể gửi thông báo đơn mới cho người bán.

## Option 1 – Telegram Bot

Sau khi khách bấm:

```
Tôi đã chuyển khoản
```

Bot gửi message:

```
Đơn hàng mới

Order ID: NG240311-4821

Khách hàng:
Nguyễn Văn A
090xxxx

Địa chỉ:
Hà Nội

Sản phẩm:
Sim ghép Bison

Giá:
120000
```

---

## Option 2 – Zalo Contact

Thêm link Zalo:

```
https://zalo.me/xxxxxxx
```

Tin nhắn gợi ý:

```
Tôi vừa đặt đơn NG240311-4821
```

---

# 11. Order Lookup Page (Optional)

Trang tra cứu đơn:

```
/tra-cuu-don
```

Form:

```
Nhập mã đơn hàng
```

Kết quả:

```
Đơn hàng: NG240311-4821

Trạng thái:
Chờ thanh toán
Đã xác nhận
Đã gửi hàng
```

Trạng thái có thể đọc từ file JSON tĩnh:

```
orders.json
```

---

# 12. Suggested Project Structure

```
src

components
  CheckoutForm.tsx
  OrderSummary.tsx
  QRPayment.tsx

lib
  generateOrderId.ts
  vietqr.ts
  storage.ts

pages
  /checkout
  /order/[id]
```

---

# 13. Future Upgrade Plan

## Phase 1 (Current)

* Checkout form
* Generate order ID
* QR payment
* Manual shipping

## Phase 2

* Telegram notification
* Order lookup page

## Phase 3

* Backend API
* Database
* Automatic bank transaction detection
* Automatic order confirmation
* Shipping tracking integration

---

# 14. Advantages

Ưu điểm của hệ thống này:

* Không cần backend
* Không cần database
* Chi phí triển khai = 0
* Dễ phát triển nhanh
* Phù hợp shop nhỏ

---

# 15. Notes

Để tránh nhầm lẫn đơn hàng, cần hiển thị rõ:

```
⚠️ Nội dung chuyển khoản PHẢI ghi đúng mã đơn hàng
```

Người bán sẽ tìm kiếm mã này trong **sao kê ngân hàng** để xác nhận thanh toán.

---
Dưới đây là 3 util quan trọng để hệ thống checkout của ngao.store (SPA) hoạt động ổn định hơn:

generateOrderId.ts → tạo mã đơn hàng

checkoutValidator.ts → validate form

orderHash.ts → chống sửa đơn (basic integrity check)

Bạn có thể copy trực tiếp vào /lib.

1️⃣ generateOrderId.ts
/**
 * Generate unique Order ID
 * Format: NG + yymmdd + random
 * Example: NG240311-4821
 */

export function generateOrderId(): string {
  const now = new Date()

  const year = now.getFullYear().toString().slice(2)
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")

  const random = Math.floor(Math.random() * 9000) + 1000

  return `NG${year}${month}${day}-${random}`
}

/**
 * Stronger Order ID (timestamp based)
 * Example: NG240311-1710151234
 */

export function generateStrongOrderId(): string {
  const now = new Date()

  const year = now.getFullYear().toString().slice(2)
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")

  const timestamp = Date.now().toString().slice(-6)

  return `NG${year}${month}${day}-${timestamp}`
}
2️⃣ checkoutValidator.ts
/**
 * Checkout form validation
 */

export interface CheckoutForm {
  name: string
  phone: string
  address: string
  note?: string
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
}

export function validateCheckoutForm(
  data: CheckoutForm
): ValidationResult {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Tên khách hàng không hợp lệ")
  }

  if (!data.phone) {
    errors.push("Số điện thoại là bắt buộc")
  }

  if (!isValidPhone(data.phone)) {
    errors.push("Số điện thoại không hợp lệ")
  }

  if (!data.address || data.address.trim().length < 5) {
    errors.push("Địa chỉ không hợp lệ")
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

/**
 * Vietnam phone validation
 */

export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\s+/g, "")

  const regex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/

  return regex.test(cleaned)
}
3️⃣ orderHash.ts

Vì SPA không có backend, khách có thể sửa:

giá tiền

product

quantity

Nên ta tạo hash để kiểm tra integrity.

/**
 * Order hash utility
 * Used to detect order modification
 */

export interface HashOrderInput {
  id: string
  product: string
  price: number
  quantity: number
}

/**
 * Simple hash generator
 */

export function generateOrderHash(
  order: HashOrderInput
): string {
  const raw = `${order.id}|${order.product}|${order.price}|${order.quantity}`

  let hash = 0

  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i)

    hash = (hash << 5) - hash + char
    hash |= 0
  }

  return hash.toString()
}

/**
 * Verify order integrity
 */

export function verifyOrderHash(
  order: HashOrderInput,
  hash: string
): boolean {
  const newHash = generateOrderHash(order)

  return newHash === hash
}
4️⃣ Ví dụ sử dụng trong checkout
Tạo đơn
import { generateOrderId } from "@/lib/generateOrderId"
import { generateOrderHash } from "@/lib/orderHash"

const orderId = generateOrderId()

const hash = generateOrderHash({
  id: orderId,
  product: "Sim ghép Bison",
  price: 120000,
  quantity: 1
})
Lưu order
createOrder({
  id: orderId,
  name: form.name,
  phone: form.phone,
  address: form.address,
  product: "Sim ghép Bison",
  price: 120000,
  quantity: 1,
  status: "pending",
  hash,
  createdAt: Date.now()
})
5️⃣ Kiến trúc /lib hoàn chỉnh nên có
lib
 ├ generateOrderId.ts
 ├ vietqr.ts
 ├ orderStorage.ts
 ├ checkoutValidator.ts
 └ orderHash.ts

💡 Nếu bạn muốn, tôi có thể viết thêm 1 file cực quan trọng cho ngao.store:

checkoutEngine.ts

File này sẽ kết nối toàn bộ:

generateOrderId

validate form

createOrder

generate QR

→ chỉ cần gọi 1 function là tạo xong checkout.
Điều này sẽ giúp code sạch hơn rất nhiều khi dùng trong Cursor / Next.js.