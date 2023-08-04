import { Suspense } from "react"
import { getCart } from "../services/addCart"
import { useQuery } from "react-query"
import OrderTemplate from "../component/templates/OrderTemplate"
import Loader from "../component/atoms/Loader"

const staticServerUrl = "https://user-app.krampoline.com/kd4fb93df2a38a";

const OrderPage=()=>{
    const {data, error, isLoading} = useQuery(staticServerUrl + "/api/cart", getCart);

    // 여기서 처리할때는 Suspense로
    return(
        <Suspense fallback={<Loader />}>
            <OrderTemplate />


        </Suspense>
    )
}

export default OrderPage;