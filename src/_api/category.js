import axios from "./axios.config"


const createCategory = async (payload) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/categorys`, {
            method: "POST",
            body: payload,
        });

        if (!res.ok) {
            throw new Error("Failed to create category. Please try again.");
        }

        const data = await res.json();
        console.log({ data });
        return data;
    } catch (error) {
        console.error("Error creating category:", error);
        alert("An error occurred while creating the category.");
    }
};

const deleteCategory = async (id) => {
    const req = await axios.delete(`/categorys/${id}`)
    console.log({ data: req.data })
    return req.data

}

const getAllCategorys = async () => {
    const req = await axios.get(`/categorys`)
    console.log({ data: req.data })
    return req.data

}


export { createCategory, deleteCategory, getAllCategorys }