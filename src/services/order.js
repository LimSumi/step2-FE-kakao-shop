import { instance } from "./index";

const staticServerUrl = "https://user-app.krampoline.com/kd4fb93df2a38a";

export const order= () => {
    return instance.post("/orders/save");
};

export const getOrderFromId = (id)=>{
    return instance.get(`/orders/${id}`);
}