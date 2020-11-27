import { dispatch } from "../store";
import { client } from "../../graphql/client";
import { SET_USERNAME } from "./types";
import { GET_DATA } from "../../graphql/data.graphql";

export const setData = username => {
  return dispatch({ type: SET_USERNAME, payload: username })
}

export const getData = getDataReq => {
  return client.query({
    query: GET_DATA,
    variables: { ...getDataReq}
  }).then(({ data, errors }) => {
    if(!!errors) return console.log('error')
    
    return console.log('data', data)
  })
}