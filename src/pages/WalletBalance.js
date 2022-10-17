import { useEffect, useState } from 'react'
import React from 'react'
import InfoCard from '../components/Cards/InfoCard'
import RoundIcon from '../components/RoundIcon'
import { MoneyIcon } from '../icons/index'

function WalletBalance({ data }) {

    const { balanceInScp, balanceInUsd,  } = { ...data }
    const [balance, setBalance] = useState()
    useEffect(() => { 
        if (balanceInUsd && balanceInScp) {
            setBalance('$' + balanceInUsd.toFixed(2) + ' / ' + balanceInScp.toFixed(2) + ' SCP')
        }
    }, [balanceInUsd, balanceInScp])

    return (
        <InfoCard title="Kontostand" value={balance}>
            <RoundIcon
                icon={MoneyIcon}
                iconColorClass="text-orange-500 dark:text-orange-100"
                bgColorClass="bg-orange-100 dark:bg-orange-500"
                className="mr-4"
            />
        </InfoCard>
    )
}

export default WalletBalance