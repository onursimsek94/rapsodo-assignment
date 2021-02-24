export default function fetchHelper ({
  url,
  method = 'GET',
  body = {},
}) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method,
        headers: new Headers({'Content-Type': 'application/json; charset=utf-8'}),
        body: JSON.stringify(body),
      })
      const data = await response.json()

      if (response.status >= 200 && response.status <= 300) {
        resolve(data)
      } else {
        reject(data)
      }
    } catch(error) {
      reject(error)
    }
  })
}
