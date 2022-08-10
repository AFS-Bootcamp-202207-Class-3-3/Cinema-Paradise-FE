import api from "./api";

export const getArrangements = () => {
    return api.get("/arrangements");
  };

export const getCurrentArrangements=(movieId,cinemaId)=>{
  return api.get(`/arrangements?movieId=${movieId}&cinemaId=${cinemaId}`)
}

