// actions
import axios from 'axios'
import { CHANGE_HOME } from './constants'

const changeList = (list) => ({
  type: CHANGE_HOME,
  list: list
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/api/user')
      .then((res) => {
        // console.log(res.data.data)
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}