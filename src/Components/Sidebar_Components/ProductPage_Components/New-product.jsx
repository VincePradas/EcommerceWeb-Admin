import { useState } from "react";

const Add = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [tag, setTag] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleOptionSelect = (option) => {
    setTag(option);
  };

  const addTag = () => {
    if (tag && selectedTags.length < 1 && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((t) => t !== tagToRemove));
  };

  const Tag = ({ tag, children }) => {
    return (
      <button
        className={`border border-gray-300 px-3 py-1 rounded-md ${
          tag === children ? "bg-gray-200" : ""
        }`}
        onClick={() => handleOptionSelect(children)}
      >
        {children}
      </button>
    );
  };

  const [getInputVal1, setInputVal1] = useState("");
  const [getInputVal2, setInputVal2] = useState("");

  const handleInputChange1 = (event) => {
    setInputVal1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputVal2(event.target.value);
  };


  return (
    <div className="inline-block text-left relative">
      <div className="flex flex-col">
        <span className="text-sm">New Product</span>
        <button
          type="button"
          className="inline-flex justify-center sm:w-60 w-[100px] rounded-md border border-gray-300 shadow-sm bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={togglePopup}
        >
          Add
        </button>
      </div>
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 m-2 md:w-auto md:h-[45rem] w-full flex flex-col md:overflow-hidden overflow-scroll">
              <div className="flex justify-between border-b pb-4 mb-4">
                <button
                  className="text-md font-medium hover:bg-slate-200 hover:rounded-md py-1 px-3 border rounded-md"
                  onClick={togglePopup}
                >
                  {"<"}
                </button>
                <span className="px-2 font-semibold">Add New Product</span>
              </div>
              <div className="py-2 md:space-y-0 space-x-4 w-full flex md:overflow-hidden overflow-scroll">
                <div className="p-4 rounded-md md:flex flex-col space-x-2 border h-full shadow-sm space-y-4 ">
                  <h1 className="text-lg font-semibold">Product Image</h1>
                  <div className="flex flex-row space-x-4">
                    <ProdImage
                      path="https://m.media-amazon.com/images/I/51eZnuGAOnL._AC_SX679_.jpg"
                      alt=""
                    />
                    <button className="h-[12rem] w-[12rem] bg-slate-50 object-cover rounded-md border shadow-sm text-gray-400 hover:bg-slate-100 text-sm">
                      Add Product Image
                    </button>
                  </div>

                  <div className="text-sm">
                    <div className="flex flex-col">
                      <h1 className="py-1">Select Category</h1>
                      <div className="flex space-x-2 pb-3 w-full md:overflow-hidden overflow-scroll">
                        <Tag tag={tag}>Pants</Tag>
                        <Tag tag={tag}>Shirt</Tag>
                        <Tag tag={tag}>Shorts</Tag>
                        <Tag tag={tag}>Jacket</Tag>
                        <Tag tag={tag}>Dress</Tag>
                        <Tag tag={tag}>For Kids</Tag>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Custom product category"
                          className="border h-12 p-2 text-sm rounded-md pr-10 w-full"
                          value={tag}
                          onChange={(e) => setTag(e.target.value)}
                        />
                        {selectedTags.map((tag) => (
                          <div
                            key={tag}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            <button className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                              {tag}
                              <span
                                className="ml-1 cursor-pointer"
                                onClick={() => removeTag(tag)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 inline-block"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M13.293 6.707a1 1 0 0 1 1.414 1.414L11.414 11l3.293 3.293a1 1 0 1 1-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 11 5.293 7.707a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    {selectedTags.length < 2 && (
                      <button
                        className="py-2 px-4 border my-4 rounded-md hover:bg-black hover:text-white"
                        onClick={addTag}
                      >
                        Add Category
                      </button>
                    )}
                    {selectedTags.length >= 1 && (
                      <p className="text-red-500">
                       Note: You can only add up to 1 category. Remove it before
                        adding another.
                      </p>
                    )}
                  </div>
                </div>
                <div className="border p-4 text-sm rounded-md shadow-sm w-auto">
                  <div className="border-b mb-4">
                    <h1 className="font-semibold text-base">
                      General Information
                    </h1>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col">
                      <span>Product Name</span>
                      <input
                        type="text"
                        className="border py-2 px-3 rounded-md"
                        placeholder="Enter product name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span>Price</span>
                      <input
                        type="number"
                        className="border py-2 px-3 rounded-md"
                        placeholder="Enter Price"
                        value={getInputVal1}
                        onChange={handleInputChange1}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span>Discount %</span>
                      <input
                        type="text"
                        className="border py-2 px-3 rounded-md"
                        placeholder="Enter discount"
                        value={getInputVal2}
                        onChange={handleInputChange2}
                      />
                    </div>
                    <span>Discounted Price</span>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        className="border py-2 px-3 rounded-md text-gray-500 input"
                        id="discount"
                        disabled
                        placeholder="Discounted Price"
                        value={
                          getInputVal2 === "" && getInputVal1 === ""
                            ? "Discounted Price"
                            : 'PHP ' +
                              (
                                getInputVal1 -
                                (getInputVal1 * parseFloat(getInputVal2)) / 100
                              ).toFixed(2)
                        }
                      />
                    </div>

                    <div className="flex flex-col">
                      <span>About the item</span>
                      <textarea
                        className="border py-2 px-3 rounded-md"
                        placeholder="Description of your product"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span>Location</span>
                      <input
                        type="text"
                        className="border py-2 px-3 rounded-md"
                        placeholder="Product Location"
                      />
                    </div>
                  </div>
                </div>
                <div className="border p-4 text-sm rounded-md shadow-sm w-auto h-auto">
                  <div className="border-b mb-4">
                    <h1 className="font-semibold text-base">Manage Stock</h1>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col">
                      <span>Stock</span>
                      <input
                        type="text"
                        className="border py-2 px-3 rounded-md"
                        placeholder="Number of stock"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span>Minimum Stock</span>
                      <input
                        type="text"
                        className="border py-2 px-3 rounded-md"
                        placeholder="Number of min. stocks"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span>Stock Keeping Unit</span>
                      <input
                        type="text"
                        className="border py-2 px-3 rounded-md"
                        placeholder="Keeping unit ID"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className="p-2 px-5 border m-4 rounded-md text-white bg-black hover:bg-yellow-400 border-gray-200"
                  onClick={togglePopup}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Add;


const ProdImage = ({ path, alt }) => {
  return (
    <img
      src={path}
      alt={alt}
      className="h-[12rem] w-[12rem] p-2 bg-gray-white object-cover rounded-md border shadow-sm"
    />
  );
};
