export function setItem (key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export function getItem (key) {
  const data = window.localStorage.getItem(key)

  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

export function remove (key) {
  window.localStorage.removeItem(key)
}

export function clear () {
  window.localStorage.clear()
}
