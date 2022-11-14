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

  const [logData, setLogData] = useState([])

  const getLogEntriesByKeyInternal = useCallback(async () => {
    const { data: logEntryData } = await getLogEntriesByKey('HostConfigApiService');
    setLogData(logEntryData)
  }, [getLogEntriesByKey])

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
                    <TableCell>Timestamp</TableCell>
                    <TableCell>Key</TableCell>
                    <TableCell>PAYLOAD</TableCell>
                    <TableCell></TableCell>
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
                                                                                               {logEntryData.secondKey}
                                                                                  </TableCell>
                                                                                      <TableCell>
                                                                                               {logEntryData.jsonData}
                                                                                  </TableCell>
                                                 </TableRow>
                                               ))}
                </TableBody>
              </Table>
            {/*  <TableFooter>
                <Pagination totalResults={10} resultsPerPage={4} onChange={() => {}} label="Table navigation" />
              </TableFooter>
            */}
            </TableContainer>
        </>
    )
}

export default Log