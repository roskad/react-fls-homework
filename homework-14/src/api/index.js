// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes } from './apiRoutes'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-fls-homework.onrender.com' }),
  tags: ['Patients', 'Appointments', 'Doctors'],
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: (name) => {
        if (!name) {
          return apiRoutes.patients.getAll;
        }
        return apiRoutes.patients.filterByName(name);
      },
      providesTags: (result) =>
        result
          ? [
            { type: "Patients", id: "LIST" },
            ...result.map(({ id }) => ({ type: "Patients", id })),
          ]
          : [{ type: "Patients", id: "LIST" }],
    }),


    getPatientById: builder.query({
      query: (id) => apiRoutes.patients.getById(id),
      providesTags: (result, error, id) => [{ type: 'Patients', id }],
    }),

    updatePatient: builder.mutation({
      query: ({ id, ...updatedPatient }) => ({
        url: apiRoutes.patients.update(id),
        method: 'PUT',
        body: updatedPatient,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Patients', id },
        { type: 'Patients', id: 'LIST' },
      ],
    }),

    addPatient: builder.mutation({
      query: (newPatient) => ({
        url: apiRoutes.patients.create,
        method: 'POST',
        body: newPatient,
      }),
      invalidatesTags: [{ type: 'Patients', id: 'LIST' }],
    }),

    deletePatient: builder.mutation({
      query: (id) => ({
        url: apiRoutes.patients.delete(id),
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Patients', id },
        { type: 'Patients', id: 'LIST' },
      ],
    }),

    //* Doctors
    getDoctors: builder.query({
      query: () => apiRoutes.doctors.getAll,
      providesTags: (result) =>
        result
          ? [
            { type: 'Doctors', id: 'LIST' },
            ...result.map(({ id }) => ({ type: 'Doctors', id })),
          ]
          : [{ type: 'Doctors', id: 'LIST' }],
    }),

    getDoctorById: builder.query({
      query: (id) => apiRoutes.doctors.getById(id),
      providesTags: (result, error, id) => [{ type: 'Doctors', id }],
    }),


    updateDoctor: builder.mutation({
      query: ({ id, ...updatedDoctor }) => ({
        url: apiRoutes.doctors.update(id),
        method: 'PUT',
        body: updatedDoctor,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Doctors', id },
        { type: 'Doctors', id: 'LIST' },
      ],
    }),

    addDoctor: builder.mutation({
      query: (newDoctor) => ({
        url: apiRoutes.doctors.create,
        method: 'POST',
        body: newDoctor,
      }),
      invalidatesTags: [{ type: 'Doctors', id: 'LIST' }],
    }),

    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: apiRoutes.doctors.delete(id),
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Doctors', id },
        { type: 'Doctors', id: 'LIST' },
      ],
    }),

    //* Appointments
    getAppointments: builder.query({
      query: () => apiRoutes.appointments.getAll,
      providesTags: (result) =>
        result
          ? [
            { type: 'Appointments', id: 'LIST' },
            ...result.map(({ id }) => ({ type: 'Appointments', id })),
          ]
          : [{ type: 'Appointments', id: 'LIST' }],
    }),

    getAppointmentById: builder.query({
      query: (id) => apiRoutes.appointments.getById(id),
      providesTags: (result, error, id) => [{ type: 'Appointments', id }],
    }),

    getFilteredAppointmentsByDate: builder.query({
      query: (date) => apiRoutes.appointments.filterByDate(date),
      providesTags: ['Appointments']
    }),

    getFilteredAppointmentsByPatientName: builder.query({
      query: (name) => apiRoutes.appointments.filterByPatientName(name),
      providesTags: ['Appointments']
    }),

    updateAppointment: builder.mutation({
      query: ({ id, ...updatedAppointment }) => ({
        url: apiRoutes.appointments.update(id),
        method: 'PUT',
        body: updatedAppointment,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Appointments', id },
        { type: 'Appointments', id: 'LIST' },
      ],
    }),

    addAppointment: builder.mutation({
      query: (newAppointment) => ({
        url: apiRoutes.appointments.create,
        method: 'POST',
        body: newAppointment,
      }),
      invalidatesTags: [{ type: 'Appointments', id: 'LIST' }],
    }),

    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: apiRoutes.appointments.delete(id),
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Appointments', id },
        { type: 'Appointments', id: 'LIST' },
      ],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPatientsQuery, useGetPatientByIdQuery, useUpdatePatientMutation, useAddPatientMutation, useDeletePatientMutation, useGetDoctorsQuery, useGetDoctorByIdQuery, useUpdateDoctorMutation, useAddDoctorMutation, useDeleteDoctorMutation, useGetAppointmentsQuery, useGetAppointmentByIdQuery, useUpdateAppointmentMutation, useAddAppointmentMutation, useDeleteAppointmentMutation, } = api