import HOST_ENV from './env.js'

const hosts = {
	DEV: {
		base: '//59.110.143.85',
	},
	PROD: {
		base: '//118.24.7.207',
	}
}

const getHost = () => {
  if (HOST_ENV === 'mock') {
    return Object.keys(hosts.DEV).reduce((obj, host) => {
      obj[host] = 'http://localhost:8000'
      return obj
    }, {})
  }

  if(HOST_ENV === 'dev') {
    return hosts.DEV
  }
  return hosts.PROD
}

console.log(HOST_ENV, getHost());

export default getHost();
