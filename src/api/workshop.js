export const fetchWorkshops = () => (
  fetch('/data/workshops.js', {
    method: 'get'
  }).then((response) => response.json())
)

export const fetchWorkshop = (workshop) => (
  fetch(`/data/workshops/${workshop}.json`, {
    method: 'get'
  }).then((response) => response.json())
)
