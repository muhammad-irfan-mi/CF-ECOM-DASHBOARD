import axios from "./axios.config"

const updateOrders = async (id, payload) => {
    const req = await axios.put(`/orders/${id}`, payload)
    console.log({ data: req.data })
    return req.data
}

const deleteOrders = async (id) => {
    const req = await axios.delete(`/orders/${id}`)
    console.log({ data: req.data })
    return req.data

}

const getAllOrders = async () => {
    const req = await axios.get(`/orders`)
    console.log({ data: req.data })
    return req.data

}

const getSingleOrder = async (id) => {
    const req = await axios.get(`/orders/${id}`)
    console.log({ data: req.data })
    return req.data

}

export { deleteOrders, getAllOrders, getSingleOrder, updateOrders }