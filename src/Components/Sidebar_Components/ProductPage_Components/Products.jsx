const Products = () => {
  
    const ProductList = ({ name, price, stock, category }) => {
      return (
        <tr className="text-sm">
          <td className="px-4 py-1">{name}</td>
          <td className="px-4 py-1">{category}</td>
          <td className="px-4 py-1"><span>PHP</span> {price}</td>
          <td className="px-4 py-1">{stock}</td>
          <td className="px-4 py-1">
            <div className="justify-end flex">
              <button className="text-sm border px-4 py-1 rounded-md bg-black text-white">
                Edit
              </button>
            </div>
          </td>
        </tr>
      );
    };
    return (
      <div className="border rounded-md my-5 bg-white">
        <div className="rounded-t-lg mb-4">
          <div className="justify-between md:flex">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b md:text-sm text-xs">
                  <th className="px-4 py-2 text-left">Products</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4  py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                </tr>
              </thead>
              <tbody>
                <ProductList
                  name="Nina"
                  category="Shorts"
                  price="1000"
                  stock="100"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Products;
  