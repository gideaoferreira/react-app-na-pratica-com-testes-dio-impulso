import React, { PropsWithChildren, useEffect, useState } from 'react';
import { PageProps } from '@/pages/typings';
import { useDocumentPageTitle } from '@/utils/useDocumentPageTitle';
import axios from 'axios';

export const List: React.FC<PropsWithChildren<PageProps>> = ({title}) => {
  useDocumentPageTitle(title);

  const [leads, setLeads ] = useState([]);

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/artists')
    .then((response) => {
      setLeads(response.data.results)
      console.log(leads)
    })
  }, [])

  return (
    <div>
    {/* <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => {
          return (
            <tr key={lead.title}>
              <th scope="row">1</th>
              <td>{lead.gender}</td>
              <td>{lead.name.first}</td>
              <td>{lead.name.last}</td>
              <td>{lead.email}</td>
            </tr>
          )
        })}
      </tbody>
    </table> */}
  </div>
  )
}
