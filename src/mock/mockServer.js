
import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/api/homeImg', {code:"OK", data:apiData.homeImg})
