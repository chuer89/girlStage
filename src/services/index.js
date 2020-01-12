// import request from '../utils/request';
import _ from 'lodash';
import host from './host';
import post from './post';

let httpApi = {
	// 上传头像图片 公共接口
  addImg: host['base'] + '/file/addFile',
  
	// 登录
	login(param = {}) {
		return post('base', '/sso/login', param);
	},
};

export default httpApi;
