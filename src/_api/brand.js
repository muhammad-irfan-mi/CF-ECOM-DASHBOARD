import axios from "./axios.config"


const createBrand = async (payload) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/brands`, {
            method: "POST",
            body: payload,
        });

        if (!res.ok) {
            throw new Error("Failed to create brand. Please try again.");
        }

        const data = await res.json();
        console.log({ data });
        return data;
    } catch (error) {
        console.error("Error creating brand:", error);
        alert("An error occurred while creating the brand.");
    }
};

const deleteBrand = async (id) => {
    const req = await axios.delete(`/brands/${id}`)
    console.log({ data: req.data })
    return req.data

}

const getAllBrands = async () => {
    const req = await axios.get(`/brand`)
    console.log({ data: req.data })
    return req.data

}


export { createBrand, deleteBrand, getAllBrands }