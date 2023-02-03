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

export async function getStringConfigValue(key) {
    return await axios.get(`/api/setting/string/${key}`)
}

export async function getBoolConfigValue(key) {
    return await axios.get(`/api/setting/bool/${key}`)
}

export async function getConfigValues() {
    return await axios.get('/api/setting');
}

export async function setStringConfigValue(key, value) {
    const config = {
        headers: {
            'Content-Type': "plain/text"
        }
    }
    return await axios.put(`/api/setting/string/${key}`, value, config)
}

export async function setBoolConfigValue(key, value) {
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    }
    return await axios.put(`/api/setting/bool/${key}`, value, config)
}