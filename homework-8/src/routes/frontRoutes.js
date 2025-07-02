export default {
  pages: {
    home: "/",
    teachers: {
      index: "/teachers",
      add: "new",
      edit: ":id/edit",
      detail: ':id'
    },
    meetings: "/meetings",
    aboutApp: "/about",
    aboutDev: '/about-us'
  },
  navigate: {
    home: "/",
    teachers: {
      index: "/teachers",
      add: "/teachers/new",
      edit: (id) => `/teachers/${id}/edit`,
      detail: (id) => `/teachers/${id}`
    },
    meetings: "/meetings",
    aboutApp: "/about",
    aboutDev: '/about-us'
  }
}