import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setData } from "../redux/actions/data.action";



export default () => {
  const username = useSelector(state => state.data.username)

  useEffect(() => {
    setData('Shadow')
  }, [])

  return (
    <div className='hello-shadow'>Hello {username}!</div>
  )
}