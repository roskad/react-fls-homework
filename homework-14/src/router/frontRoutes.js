export const frontRoutes = {
  pages: {
    home: '/',
    patients: {
      base: 'patients',
      edit: '/patients/edit/:id?',
    },
    doctors: {
      base: 'doctors',
      edit: '/doctors/edit/:id?',
    },
    appointments: {
      base: 'appointments',
      edit: '/appointments/edit/:id?',
    },
  },
  navigate: {
    patients: {
      list: '/patients',
      edit: (id) => `/patients/edit/${id}`,
      create: '/patients/edit',
    },
    doctors: {
      list: '/doctors',
      edit: (id) => `/doctors/edit/${id}`,
      create: '/doctors/edit',
    },
    appointments: {
      list: '/appointments',
      edit: (id) => `/appointments/edit/${id}`,
      create: '/appointments/edit',
    },
  },
};
