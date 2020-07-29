import * as React from 'react'
import {gql, useQuery} from '@apollo/client';
import Content from "./Content";

const DESSERTS_LIST = gql`
  query {
     dessertList{
      id
      name
      fat
      calories
      carbs
      protein
    }
  }
`;


export default function Home() {
  const {loading, error, data, client} = useQuery(DESSERTS_LIST,{pollInterval: 500});
  if (loading) return null
  if (error) return

  return (
    <>
      <Content data={data} client={client}/>
    </>
  )

}

