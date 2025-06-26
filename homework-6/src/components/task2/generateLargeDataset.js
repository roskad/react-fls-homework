export default function generateLargeDataset(rows = 50000) {


  const largeProductList = Array.from({ length: rows }, (_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
    value: Math.floor(Math.random() * 1000),
  }))

  return largeProductList;
}