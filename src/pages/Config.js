import PageTitle from '../components/Typography/PageTitle'
import React, {useCallback, useEffect, useState} from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHeader, TableRow,} from '@windmill/react-ui'
import {getBoolConfigValue, getConfigValues, restart, setBoolConfigValue, setStringConfigValue} from "../api/ApiClient";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Config() {

    const [configData, setConfigData] = useState([])
    const [formData, setFormData] = useState({
        app_scpStorageProviderApiAdress: '',
        app_autoUpdateUrl: '',
        app_scpBin: '',
        app_apipassword: '',
        app_enableLogging: false,
    })

    const getConfigValuesInternal = useCallback(async () => {
        const {data} = await getConfigValues();
        const {data: dataApp_enableLogging} = await getBoolConfigValue('app_enableLogging');
        setFormData({
            app_scpStorageProviderApiAdress: data.app_scpStorageProviderApiAdress || '',
            app_autoUpdateUrl: data.app_autoUpdateUrl || '',
            app_scpBin: data.app_scpBin || '',
            app_apipassword: data.app_apipassword || '',
            app_enableLogging: dataApp_enableLogging || false,
        })
        setConfigData(data);
        console.log('configData', configData);
    }, [getConfigValues])

    useEffect(() => {
        getConfigValuesInternal();
    }, [getConfigValuesInternal])

    useEffect(() => {
        console.log('formData', formData);
    }, [formData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            app_scpStorageProviderApiAdress: event.target.app_scpStorageProviderApiAdress?.value,
            app_autoUpdateUrl: event.target.app_autoUpdateUrl?.value,
            app_scpBin: event.target.app_scpBin?.value,
            app_apipassword: event.target.app_apipassword?.value,
            app_enableLogging: event.target.app_enableLogging?.checked,
        }

        const {
            app_scpStorageProviderApiAdress,
            app_autoUpdateUrl,
            app_scpBin,
            app_apipassword,
            app_enableLogging
        } = formData;

        await setStringConfigValue('app_scpStorageProviderApiAdress', app_scpStorageProviderApiAdress);
        await setStringConfigValue('app_autoUpdateUrl', app_autoUpdateUrl);
        await setStringConfigValue('app_scpBin', app_scpBin);
        await setStringConfigValue('app_apipassword', app_apipassword);
        await setBoolConfigValue('app_enableLogging', app_enableLogging);

        await notifySuccessfullySaved();
        await restart();
    }

    const handleChange = async (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        if (fieldName != 'app_enableLogging') {
            setFormData((prevState) => ({
                ...prevState,
                [fieldName]: fieldValue
            }));
        }

    }

    const handleChangeEnableLogging = async (event) => {
        setFormData((prevState) => {
            const {app_enableLogging} = prevState;
            return ({
                ...prevState,
                'app_enableLogging': !prevState.app_enableLogging
            });
        })
    }

    const notifySuccessfullySaved = () => toast("Erfolgreich gespeichert!");

    return (<>
            <PageTitle>Config</PageTitle>
            <form onSubmit={handleSubmit}>

                <TableContainer>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell>Key</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Storage Provider API Adress (e.g. 192.168.178.10)
                                </TableCell>
                                <TableCell>
                                    <input type="text" id="app_scpStorageProviderApiAdress"
                                           value={formData.app_scpStorageProviderApiAdress}
                                           name="app_scpStorageProviderApiAdress" onChange={handleChange}
                                           required></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Update URL for price settings
                                </TableCell>
                                <TableCell>
                                    <input type="text" id="app_autoUpdateUrl" value={formData.app_autoUpdateUrl}
                                           name="app_autoUpdateUrl" onChange={handleChange} required></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Location of scp binary on the host</TableCell>
                                <TableCell>
                                    <input type="text" id="app_scpBin" value={formData.app_scpBin} name="app_scpBin"
                                           onChange={handleChange} required></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    API Password, needed to communicate and exchange with the ScPrime Software
                                </TableCell>
                                <TableCell>
                                    <input type="text" id="app_apipassword" value={formData.app_apipassword}
                                           name="app_apipassword" onChange={handleChange} required></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Enables logging functionality in the ScPrime Dashboard
                                </TableCell>
                                <TableCell>
                                    <input type="checkbox" id="app_enableLogging" checked={formData.app_enableLogging}
                                           name="app_enableLogging" onChange={handleChangeEnableLogging}></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>
                                    <button type="submit">Speichern</button>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        draggable
                                        theme="dark"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>

                </TableContainer>
            </form>

        </>
    )
}

export default Config