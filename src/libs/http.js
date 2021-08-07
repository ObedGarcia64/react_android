import URLS from './urls'
import Storage from './storage'

class Http {
  static instance = new Http()
  get_all = async () => {
      try {
          let request = await fetch(`${URLS.badges_url}/all/`)
          let response = await request.json()
          return response
      } catch (err) {
          console.log('HTTP get all method error', err)
          throw Error(err)
      }
  }
  get = async badgeId => {
      try {
          let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`)
          let response = await request.json()
          return response
      } catch (err) {
          console.log('HTTP get method error', err)
          throw Error(err)
      }
  }
  post = async badge => {
      try {
          let request = await fetch(`${URLS.badges_url}/new/`,{
              method:'POST',
              body:JSON.stringify(badge),
          })
          let response = await request.json()
          return response
      } catch (err) {
          console.log('HTTP post method error', err)
          throw Error(err)
      }
  }
  put = async (badgeId, body) => {
      try {
          let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`,{
              method:'PUT',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body:JSON.stringify(body),
          })
          let response = await request.json()
          return response
      } catch (err) {
          console.log('HTTP put method error', err)
          throw Error(err)
      }
  }
  remove = async badgeId => {
      try {
          let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`,{
              method:'DELETE',
          })
          let response = await request.json()
          return response
      } catch (err) {
          console.log('HTTP delete method error', err)
          throw Error(err)
      }
  }
}

export default Http;