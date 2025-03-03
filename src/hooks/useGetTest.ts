import { useEffect, useState } from "react"
import { ApiServise } from "../api/api"
import { useParams } from "react-router-dom"
import { Test } from "../types"

const apiServise = new ApiServise()

export const useGetTest = () => {
  const { id } = useParams<{ id?: string }>()
  const [data, setData] = useState<Test>()

  useEffect(() => {
    apiServise.getTest(id || '')
      .then(res => setData(res))
  }, [])

  return {data}
}