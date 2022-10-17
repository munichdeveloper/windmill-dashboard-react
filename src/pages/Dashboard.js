import React, { useCallback, useEffect, useState } from 'react'

import {
  Badge,
  Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader, TableRow
} from '@windmill/react-ui'
import PageTitle from '../components/Typography/PageTitle'
import response from '../utils/demo/modules'


import Storage from './Storage'
import WalletBalance from './WalletBalance'
import ContractCounter from './ContractCounter';
import { getHostConfig, getModuleStatus, getWalletBalances } from '../api/ApiClient'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  /*
  useEffect(() => {
    fetch('/api/host', {
      headers: {
        'User-Agent': 'ScPrime-Agent',
        'Authentication': 'Basic ' + ':015ebec5fa1a997957fc1e43f8cbdfe0'.toString('base64')
      }
    })
      .then(res => res.json())
      .then(res => {
        setHostData(res)
      })
  }, [])

  useEffect(() => {
    fetch('http://pi4.fritz.box:4280/host/contracts', {
      headers: {
        'User-Agent': 'ScPrime-Agent',
        'Authentication': 'Basic ' + ':015ebec5fa1a997957fc1e43f8cbdfe0'.toString('base64')
      }
    })
      .then(res => res.json())
      .then(res => {
        setContractData(res)
      })
  }, [])
  useEffect(() => {
    fetch('/api/wallet', {
      headers: {
        'User-Agent': 'ScPrime-Agent',
        'Authentication': 'Basic ' + ':015ebec5fa1a997957fc1e43f8cbdfe0'.toString('base64')
      }
    })
      .then(res => res.json())
      .then(res => {
        setWalletData(res)
      })
  }, [])
  */

  const [hostConfig, setHostConfig] = useState({})
  const [moduleStatus, setModuleStatus] = useState([])
  const [walletData, setWalletData] = useState({})

  const getHostConfigInternal = useCallback(async () => {
    const { data } = await getHostConfig();
    setHostConfig(data);
  }, [])

  const getModuleStatusInternal = useCallback(async () => {
    const { data: priceUpdaterStatus } = await getModuleStatus('priceUpdater');
    moduleStatus['daemon'] = 'running';
    moduleStatus['priceUpdater'] = priceUpdaterStatus;
    setModuleStatus(moduleStatus);
  }, [moduleStatus])

  const getWalletBalancesInternal = useCallback(async () => {
    const { data: walletBalanceData } = await getWalletBalances();
    setWalletData(walletBalanceData)
  }, [])

  useEffect(() => {
    getHostConfigInternal();
    getModuleStatusInternal();
    getWalletBalancesInternal();
  }, [getHostConfigInternal, getModuleStatusInternal, getWalletBalancesInternal])

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {/* <TotalStorage data={hostData} /> */}

        <WalletBalance data={walletData} />

        <Storage data={hostConfig} />

        <ContractCounter data={hostConfig} />
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Modul</TableCell>
              <TableCell>Status</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((module, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span title={module.tooltip} className="text-sm">{module.displayName}</span>
                </TableCell>
                <TableCell>
                  <Badge type={module.status}>{moduleStatus[module.name]}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
      {/*
      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Einnahmen">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
      */}
    </>
  )
}

export default Dashboard


