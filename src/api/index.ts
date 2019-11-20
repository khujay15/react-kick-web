import axios from 'axios';

const networks = axios.create({
  baseURL: 'https://YOUR_SERVER_DOMAIN',
});

export function setHeader(token: string): void {
  networks.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log('Network HEADER: ', networks.defaults.headers.common);
}

export function removeHeader(): void {
  delete networks.defaults.headers.common.Authorization;
}

export default networks;
