import { useContext, useEffect, useState } from "react";
import { createProduct } from "../../_api/products";
import { ThemeContext } from "../../context/ContextProvider";
import { getAllBrands } from "../../_api/brand";
import { getAllCategorys } from "../../_api/category";

const CreateProduct = () => {
  const [state, setState] = useState({});
  const [images, setImages] = useState([]);
  const context = useContext(ThemeContext);

  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleOffer = () => {
    setIsOnSale(!isOnSale)
  }
  
  const __submit__ = async () => {
    const formData = new FormData();

    if (typeof state.colour === "string") state.colour = state.colour.split(",");
    if (typeof state.size === "string") state.size = state.size.split(",");
    if (typeof state.tags === "string") state.tags = state.tags.split(",");
    if (typeof state.price === "string") state.price = +state.price;

    console.log({state})
    formData.append("name", String(state.name));
    formData.append("price", String(state.price));
    formData.append("desc", String(state.desc));
    formData.append("size", JSON.stringify(state.size));
    formData.append("colour", JSON.stringify(state.colour));
    formData.append("tags", JSON.stringify(state.tags));

    if (images) {
      images.forEach((image) => {
        formData.append("images", image);
      });
    }

    const response = await createProduct(formData);

    if (response) {
      alert("Product created successfully!");
      setImages([]);
    }
  };

  const __onchange__ = (e) => {
    console.log({ state })
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };




  const fetchAllData = async () => {
    const b = await getAllBrands()
    const c = await getAllCategorys()
    setBrand(b)
    setCategory(c)

  }

  useEffect(() => {
    fetchAllData()
  }, [])
  return (
    <div className="bg-[#edeeef] h-[89vh] overflow-auto p-10 flex justify-center items-center">
      <div
        className={`w-[35rem] shadow-lg rounded-lg ${context.colors.boxbg} p-6 mt-24`}
      >
        <h5 className="text-center mb-6 font-bold text-gray-700 text-lg">
          Create New Product
        </h5>

        <div className="grid grid-cols-1 gap-4">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              onChange={__onchange__}
              placeholder="Men's watch"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Description */}
          <div>
            <textarea
              name="desc"
              onChange={__onchange__}
              placeholder="Description about the product"
              rows="3"
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>

          {/* Price and Colour */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              onChange={__onchange__}
              placeholder="4000"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="colour"
              onChange={__onchange__}
              placeholder="red,blue,green"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Size and Tags */}
          <div className="flex gap-4">
            <input
              type="text"
              name="size"
              onChange={__onchange__}
              placeholder="S,M,L"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="tags"
              onChange={__onchange__}
              placeholder="casual,sports"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          {/* Offers */}
          <div className="flex gap-4">
            <input
              type="checkBox"
              name="isOnSale"
              onChange={handleOffer}
              placeholder="S,M,L"
              className="w-8 border border-gray-300 rounded "
            />
            <input
              type="number"
              name="salePrice"
              onChange={__onchange__}
              placeholder="Add offer"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Size and Tags */}
          <div className="flex gap-4">
            <select
              onChange={__onchange__}
              name="categoryId" id="" className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">select category</option>
              {category && category.map((e, i) => (
                <option key={i} value={e.id}>{e.name}</option>))}

            </select>
            <select
              onChange={__onchange__}
              name="brandId" id="" className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">Select Brand</option>
              {brand && brand.map((e, i) => (
                <option key={i} value={e.id}>{e.name}</option>))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="w-full flex justify-center items-center border border-gray-400 rounded px-3 py-2 text-gray-600 cursor-pointer">
              Upload Images
              <input
                type="file"
                multiple
                hidden
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              onClick={__submit__}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
