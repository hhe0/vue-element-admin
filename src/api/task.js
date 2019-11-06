import request from '@/utils/request'

export function getTaskList(status) {
  return request({
    url: '/task/list',
    method: 'get',
    params: { status }
  })
}

export function addTask(data) {
  return request({
    url: '/task/',
    method: 'post',
    data
  })
}
