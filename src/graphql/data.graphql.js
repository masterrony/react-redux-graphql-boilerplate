import { gql } from "@apollo/client";



export const GET_DATA = gql`
  query GET_DATA($getDataReq: GetDataReq!) {
    data(getDataReq: $getDataReq) {
      username
      books
    }
  }
`