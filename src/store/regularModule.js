export default {
  state: {
    user: '',
    users: [],
    bookList: [],
    rebookList: [],
    begdate: '',
    enddate: '',
    userinfo: []
  },
  mutations: {
    REGULAR_UPDATE: (state, data) => {
      state.user = data[0].user
      state.users = data[0].users
      state.begdate = data[0].begdate
      state.enddate = data[0].enddate
      state.bookList = data[0].book
      state.rebookList = data[0].rebook
      state.userinfo = data[0].userinfo
    }
  },
  actions: {}
}
