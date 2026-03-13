/**
 * Checkout form validation
 */

export interface CheckoutForm {
  name: string;
  phone: string;
  address: string;
  note?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateCheckoutForm(data: CheckoutForm): ValidationResult {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Tên khách hàng không hợp lệ");
  }

  if (!data.phone) {
    errors.push("Số điện thoại là bắt buộc");
  } else if (!isValidPhone(data.phone)) {
    errors.push("Số điện thoại không hợp lệ");
  }

  if (!data.address || data.address.trim().length < 5) {
    errors.push("Địa chỉ không hợp lệ");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Vietnam phone validation
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\s+/g, "");
  const regex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
  return regex.test(cleaned);
}
