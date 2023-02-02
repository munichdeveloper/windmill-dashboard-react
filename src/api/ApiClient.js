import axios from "axios";

export async function getHostConfig() {
  return await axios
    .get(`/api/scpconfig/host`)
}

export async function getModuleStatus(name) {
  return await axios.get(`/api/status/${name}`)
}

export async function getWalletBalances() {
  return await axios.get(`/api/wallet`)
}

export async function getLogEntriesByKey(key) {
    return await axios.get(`/api/log/${key}`)
}

export async function getConfigValue(key) {
    return await axios.get(`/api/setting/${key}`)
}

export async function getConfigValues() {
    return await axios.get('/api/setting');
}

export async function setConfigValue(key,value) {
    const config = {
        headers: {
            'Content-Type': "plain/text"
        }
    }

    console.log('value.length', value.length)

    return await axios.put(`/api/setting/${key}`, value, config)
}