import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data , setdata] = useState({})
    // use effect is used to only invoke when the event is triggered
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?amount=1&from=${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res.rates))
        console.log(data)
    } , [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo