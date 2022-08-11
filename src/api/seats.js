import api from "./api";

export const getChosenSeats = (arrangementId) => {
    return api.get(`/orders/arrangement?id=${arrangementId}`);
  };