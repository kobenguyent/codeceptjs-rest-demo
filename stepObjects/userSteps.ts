export const userSteps = {
  async getUserPerPage(page = 2) {
    return this.sendGetRequest(`/api/users?page=${page}`);
  },

  async getUserById(id: number) {
    return this.sendGetRequest(`/api/users/${id}`);
  }
}