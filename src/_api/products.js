import axios from "./axios.config"

// API function to create a product
const createProduct = async (payload) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`, {
            method: "POST",
            body: payload,
        });

        if (!res.ok) {
            throw new Error("Failed to create product. Please try again.");
        }

        const data = await res.json();
        console.log({ data });
        return data;
    } catch (error) {
        console.error("Error creating product:", error);
        alert("An error occurred while creating the product.");
    }
};

const updateProduct = async (id, payload) => {
    const req = await axios.put(`/products/${id}`, payload)
    console.log({ data: req.data })
    return req.data
}

const deleteProduct = async (id) => {
    const req = await axios.delete(`/products/${id}`)
    console.log({ data: req.data })
    return req.data

}

const getAllProducts = async () => {
    const req = await axios.get(`/products`)
    console.log({ data: req.data })
    return req.data

}

const getSingleProduct = async (id) => {
    const req = await axios.get(`/products/${id}`)
    console.log({ data: req.data })
    return req.data

}

export { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct }