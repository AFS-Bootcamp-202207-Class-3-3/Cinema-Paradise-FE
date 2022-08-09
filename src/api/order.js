import api from "./api";

export const getorders = () => {
    return api.get("/orders");
};

export const getOrderDetailsById = (id) => {
    return api.get(`/orders/${id}`);
};

export const createOrder = (order) => {
    return api.post("/todos",order.order);
};
