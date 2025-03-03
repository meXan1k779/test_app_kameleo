import { useEffect, useState } from "react"
import { ApiServise } from "../api/api"
import { SortType, STATUS_ORDER, Test } from "../types"

const apiServise = new ApiServise()

export const useGetTests = () => {
  const [chacheData, setChache] = useState<Test[]>([])
  const [data, setData] = useState<Test[] | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [serachValue, setSearchvalue] = useState('')

   const resetSearch = () => {
     setData(chacheData)
     setSearchvalue('')
  }

    const handleSort = (name: keyof Test, direction: SortType) => {
  
      const sortedData = data?.sort((a, b) => {
        if (name === 'status') {
          // Специальная сортировка для статуса
          const order = direction === SortType.ASK ? STATUS_ORDER.ASC : STATUS_ORDER.DESC
          return order.indexOf(a.status) - order.indexOf(b.status)
        }
  
        const comareResult = (a[name] as string).localeCompare(b[name] as string)
        
        return direction === SortType.ASK ? comareResult : -comareResult
      })
      setData(() => [...sortedData || []])
    }
  
  const handleSearch = (val: string) => {
    setSearchvalue(val)
    if (!val) {
      setData(chacheData)
    }
    const filtererdData = chacheData.filter(item => item.name.toLowerCase().includes(val.toLowerCase()))
    setData(filtererdData)
  }


  useEffect(() => {
    apiServise.getTests()
      .then(tests => {
        Promise.all(tests.map(item => apiServise.getSites(item.siteId)))
          .then((sites) => {
            const mappedTests = tests.map((item, i) => ({ ...item, site: sites[i].url }))
            setData(mappedTests)
            setChache(mappedTests)
          })
       
      })
      .catch((e) => console.error(e.message))
      .finally(() => setLoading(false))
  }, [])

  return {data, isLoading, serachValue, handleSort, handleSearch, resetSearch}
}