import React from 'react'
import InfoCard from '../components/Cards/InfoCard'
import RoundIcon from '../components/RoundIcon'
import { ChartsIcon } from '../icons/index'

function TotalStorage({ data }) {

    //  const [data, setData] = useState({})

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1000;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const { externalsettings } = { ...data }
    const { totalstorage } = { ...externalsettings }
    return (
        <InfoCard title="gesamter Speicherplatz" value={formatBytes(totalstorage)}>
            <RoundIcon
                icon={ChartsIcon}
                iconColorClass="text-orange-500 dark:text-orange-100"
                bgColorClass="bg-orange-100 dark:bg-orange-500"
                className="mr-4"
            />
        </InfoCard>
    )
}

export default TotalStorage