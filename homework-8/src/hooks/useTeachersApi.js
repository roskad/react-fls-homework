import { useCallback, useState } from 'react'
import apiRoutes from '../api/apiRoutes'
import axios from 'axios'

const useTeachersApi = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchTeachers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(apiRoutes.getAllTeachers)
      setData(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const getTeacherById = useCallback(async (id) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(apiRoutes.getTeacherById(id))
      return res.data
    } catch (err) {
      setError(err)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const addTeacher = useCallback(async (teacherData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.post(apiRoutes.addTeacher, teacherData)
      fetchTeachers()
      return res.data
    } catch (err) {
      setError(err)
      return null
    } finally {
      setLoading(false)
    }
  }, [fetchTeachers])

  const updateTeacher = useCallback(async (id, updatedData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.put(apiRoutes.updateTeacher(id), updatedData)
      fetchTeachers()
      return res.data
    } catch (err) {
      setError(err)
      return null
    } finally {
      setLoading(false)
    }
  }, [fetchTeachers])

  const deleteTeacher = useCallback(async (id) => {
    setLoading(true)
    setError(null)
    try {
      await axios.delete(apiRoutes.deleteTeacher(id))
      fetchTeachers()
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [fetchTeachers])

  return {
    data,
    loading,
    error,
    fetchTeachers,
    getTeacherById,
    addTeacher,
    updateTeacher,
    deleteTeacher,
  }
}

export default useTeachersApi
