import { useState } from "react"

function useFilterProduct() {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }
  return {
    searchValue,
    handleChange
  }
}

export default useFilterProduct