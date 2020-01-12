import host from './host';
import { message } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import qs from 'qs';

export default (region, api, params = {}) => {
	// let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

	for (let key in params) {
		params[key] === '' && delete params[key];
	}

	_.assign(params, {
		// 'token': userInfo.token,
	});

	let url = (host[region] || '') + api;

	// let ajax = request(url, config);
	// let ajax = axios(config);
	let ajax  = axios.post(url, qs.stringify(params));

	ajax.then(({data}) => {
		// 超时登录
		// 102,"无效的token" 103,"token已过期"
		if (data && (data.code === 103 || data.code === 102)) {
			// 去登录
			// window.location = '/login';
			// window.location.reload();
		}
	}).catch(function () {
		message.warning('服务器有误，请稍候再试。');
	});

	return ajax;
}