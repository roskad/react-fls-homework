export default {
  productsList: 'http://localhost:5000/api/products',
  addProduct: 'http://localhost:5000/api/products',
  getUpdateProductLink: (id) => `http://localhost:5000/api/products/${id}`,
  getProductById: (id) => `http://localhost:5000/api/products/${id}`,
  getDeleteProductLink: (id) => `http://localhost:5000/api/products/${id}`,
}