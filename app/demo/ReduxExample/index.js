// index.js
import Mock from 'mockjs';

import MPureComponent from '../components/MPureComponent';

const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'province': '@Province',
    'city': '@City',
    'county': '@county',
    'address': '@province @city @county',
  }],
});

const json = JSON.stringify(data, null, 4);

console.log(json);

export default class ReduxExample extends MPureComponent {

}