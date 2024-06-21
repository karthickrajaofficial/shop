export const BASE_URL = import.meta.env.VITE_API_BASE_URL || '5000';

export const USERS_URL = `${BASE_URL}/users`;
export const CATEGORY_URL = `${BASE_URL}/category`;
export const PRODUCT_URL = `${BASE_URL}/products`;
export const UPLOAD_URL = `${BASE_URL}/upload`;
export const ORDERS_URL = `${BASE_URL}/orders`;
export const RAZORPAY_URL = `${BASE_URL}/config/payment`;

// If needed, uncomment the following line
// export const PAYPAL_URL = `${BASE_URL}/api/config/paypal`;
