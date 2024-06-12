export const seo = {
  title: 'Brock Teddy | 博客',
  description:
    'Brock Teddy 的个人博客，记录了我的学习、工作、生活，以及一些技术分享。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
