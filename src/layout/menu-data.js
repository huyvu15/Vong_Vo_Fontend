const menu_data = [
  {
    id: 1,
    title: 'Trang chủ',
    link: '/',
  },
  {
    id: 2,
    title: 'Về chúng tôi',
    link: '/about'
  },
  {
    id: 3,
    title: 'Cửa hàng',
    link: '/shop'
  },
  {
    id: 5,
    title: 'Liên hệ chúng tôi',
    link: '/contact'
  },
  {
    id: 6,
    hasDropdown: true,
    title: 'Thông tin',
    link: '/about',
    submenus: [
      { title: 'FAQs', link: '/faq' },
      { title: 'Privacy & Policy', link: '/policy' },
      { title: 'Terms & Conditions', link: '/terms' },
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: 'My Cart', link: '/cart' },
      { title: 'My Wishlist', link: '/wishlist' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'Error 404', link: '/404' },
    ]
  },
]

export default menu_data;
