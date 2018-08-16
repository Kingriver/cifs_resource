const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const util = {
  request(opt) {
    let options = Object.assign({}, opt);
    let { url, data } = options;
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        success(res) {
          resolve(res.data)
        },
        fail(res) {
          reject(err)
        }
      })
    })
  }
}
module.exports = {
  formatTime: formatTime,
  util: util
}
