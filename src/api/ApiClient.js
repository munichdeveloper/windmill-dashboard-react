import axios from "axios";

export async function getHostConfig() {
  return await axios
      .get(`/scpconfig/host`)
}

export async function getModuleStatus(name) {
    return await axios.get(`/status/${name}`)
}

export async function getWalletBalances() {
    return await axios.get(`/wallet`)
}

export async function getLogEntriesByKey(key) {
    return await axios.get(`/log/${key}`)
}

export async function getStringConfigValue(key) {
    return await axios.get(`/setting/string/${key}`)
}

export async function getBoolConfigValue(key) {
    return await axios.get(`/setting/bool/${key}`)
}

export async function getConfigValues() {
    return await axios.get('/setting');
}

export async function setStringConfigValue(key, value) {
    const config = {
        headers: {
            'Content-Type': "plain/text"
        }
    }
    return await axios.put(`/setting/string/${key}`, value, config)
}

export async function setBoolConfigValue(key, value) {
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    }
    return await axios.put(`/setting/bool/${key}`, value, config)
}

export async function restart() {
    return await axios.post(`/admin/restart`);
}