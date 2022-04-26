import axios from 'axios'

const api = axios.create({
  baseURL: 'https://wobbly-goats-message.herokuapp.com/rooms',
})
export const getRoom = (rooms, room_id) => {
  return api
    .get(`/${room_id}`, {
      params: { rooms },
    })
    .then(({ data }) => {
      const roomArray = data.room_id
      return roomArray
    })
}
