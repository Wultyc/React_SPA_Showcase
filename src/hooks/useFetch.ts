import { useEffect, useState } from "react"

function useFetch<Type>(url: string) {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<Type>()
    const [headers, setHeaders] = useState<any>(null)
    const [errors, setErrors] = useState<string | null>(null)

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchData = async () => {
            const res = await fetch(url, { signal: abortCont.signal })

            if (!res.ok)
                setErrors('Error fetching data from server')

            const resBody = await res.json()
            const resHeaders = Array.from(res.headers.entries())
                                    //.reduce((obj, [ key, value]) => {
                                    //    obj[key] = value;
                                    //    return obj;
                                    //})

            setData(resBody)
            setHeaders(resHeaders)
            setIsLoading(false)
            setErrors(null)
        }

        setTimeout(() => {
            
            fetchData()

        }, 1000)

        // abort the fetch
        return () => abortCont.abort();
    }, [])

    return { data, headers, isLoading, errors }
}

export default useFetch