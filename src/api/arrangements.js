import api from "./api";

export const getArrangements = () => {
    return api.get("/arrangements");
  };