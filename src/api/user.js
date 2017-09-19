export const fetchUsers = () => (
  fetch('/data/users.js', {
      method: 'get'
  }).then((response) => response.json())
)

export const fetchUser = (username) => (
  fetch(`/data/users/${username}.json`, {
      method: 'get'
  }).then((response) => response.json())
)
