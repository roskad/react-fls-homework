export default {
  pages: {
    home: "/",
    shop: { index: "/shop", products: ":id" },
    payment: "/payment",
    contacts: "/contacts",
  },
  navigate: {
    products: {
      list: '/shop',
      add: '/shop/new',
      getDetailLink: (id) => `/shop/${id}`,
      getEditLink: (id) => `/shop/${id}/edit`,
    },
  },
};