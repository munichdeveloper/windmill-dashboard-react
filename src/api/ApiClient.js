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