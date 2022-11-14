import PageTitle from '../components/Typography/PageTitle'
import React, { useCallback, useEffect, useState } from 'react'
import { getLogEntriesByKey } from '../api/ApiClient'
import {
  Avatar, Badge, Pagination,
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
} from '@windmill/react-ui'

function Log() {

  const [logData, setLogData] = useState({})

  const getLogEntriesByKeyInternal = useCallback(async () => {
    const { data: logEntryData } = await getLogEntriesByKey('HostConfigApiService');
//    const { data: logEntryData } = await fetchLogEntryData();
    console.log('POTATOE',logEntryData)
    setLogData(logEntryData)
  }, [getLogEntriesByKey])

  const fetchLogEntryData=()=>{
    fetch ('mocks/logHostConfigApiService.json', {
                                                       headers : {
                                                         'Content-Type': 'application/json',
                                                         'Accept': 'application/json'
                                                        }
                                                     })
                                                      .then(function(response){
                                                             console.log(response)
                                                             return response.json();
                                                           })
  }

  useEffect(()=>{
    getLogEntriesByKeyInternal();
  }, [getLogEntriesByKeyInternal])

    return (
        <>
            <PageTitle>Log</PageTitle>
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Client</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                                   {logData.map((logEntryData, i) => (
                                                 <TableRow key={i}>
                                                   <TableCell>
                                                         {logEntryData.createDateTime}
                                                   </TableCell>
                                                   <TableCell>
                                                                {logEntryData.primaryKey}
                                                   </TableCell>
                                                      <TableCell>
                                                                                               {logEntryData.updateSetting}
                                                                                  </TableCell>
                                                                                      <TableCell>
                                                                                               {logEntryData.jsonData}
                                                                                  </TableCell>
                                                 </TableRow>
                                               ))}
                </TableBody>
              </Table>
              <TableFooter>
                <Pagination totalResults={10} resultsPerPage={4} onChange={() => {}} label="Table navigation" />
              </TableFooter>
            </TableContainer>
        </>
    )
}

export default Log