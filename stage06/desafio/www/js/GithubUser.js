export class GithubUser {
  static search(userName) {
    const endpoint = `https://api.github.com/users/${userName}`

    return fetch(endpoint)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))
  }
}