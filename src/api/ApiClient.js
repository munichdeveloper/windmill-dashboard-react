import axios from "axios";

export async function getHostConfig() {
  return await axios
    .get(`/api/config/host`)
}

export async function getModuleStatus(name) {
  return await axios.get(`/api/status/${name}`)
}

export async function getWalletBalances() {
  return await axios.get(`/api/wallet`)
}