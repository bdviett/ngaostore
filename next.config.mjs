/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Tối ưu cho production
    formats: ['image/avif', 'image/webp'],
    // Nếu sau này bạn dùng external images, thêm domains ở đây
    // domains: ['example.com'],
  },
};

export default nextConfig;
