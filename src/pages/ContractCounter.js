import InfoCard from '../components/Cards/InfoCard'
import React, {  } from 'react'

import RoundIcon from '../components/RoundIcon'
import { CardsIcon } from '../icons/index'

function ContractCounter({ data }) {
    const { financialmetrics } = { ...data }
    const { contractcount } = { ...financialmetrics }
  
    return (
        <InfoCard title="Anzahl laufende Verträge" value={contractcount}>
            <RoundIcon
                icon={CardsIcon}
                iconColorClass="text-teal-500 dark:text-teal-100"
                bgColorClass="bg-teal-100 dark:bg-teal-500"
                className="mr-4"
            />
        </InfoCard>
    )
}

export default ContractCounter