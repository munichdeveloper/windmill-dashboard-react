import InfoCard from '../components/Cards/InfoCard'
import React, { useEffect, useState } from 'react'

import RoundIcon from '../components/RoundIcon'
import { CartIcon } from '../icons/index'

function Storage({ data }) {
    const { externalsettings } = { ...data }
    const { remainingstorage, totalstorage, } = { ...externalsettings }
    const [usedStorage, setUsedStorage] = useState("")

    useEffect(() => {
        if (remainingstorage && totalstorage) {
            const usedStorage = totalstorage - remainingstorage;
            const usedStorageInTB = usedStorage * Math.pow(10, -12)
            const totalstorageInTB = totalstorage * Math.pow(10, -12)
            setUsedStorage(usedStorageInTB.toFixed(2) + ' TB / ' + totalstorageInTB.toFixed(2) + ' TB')
        }
    }, [usedStorage, totalstorage, remainingstorage])

    return (
        <InfoCard title="belegter Speicherplatz" value={usedStorage}>
            <RoundIcon
                icon={CartIcon}
                iconColorClass="text-blue-500 dark:text-blue-100"
                bgColorClass="bg-blue-100 dark:bg-blue-500"
                className="mr-4"
            />
        </InfoCard>
    )
}

export default Storage