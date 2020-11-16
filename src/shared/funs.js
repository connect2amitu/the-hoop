import { toast } from 'react-toastify';


const success = (msg) => {
  toast.success(msg);
}

const error = (msg) => {
  toast.error(msg);
}

const warn = (msg) => {
  toast.warn(msg);
}

const info = (msg) => {
  toast.info(msg);
}

export const TOAST = {
  success,
  error,
  warn,
  info,
}

export const toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10)
  var hours = Math.floor(sec_num / 3600)
  var minutes = Math.floor(sec_num / 60) % 60
  var seconds = sec_num % 60

  return [hours, minutes, seconds]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v, i) => v !== "00" || i > 0)
    .join(":")
}


export const findDiscount = (grand_total) => {
  var discount = 0
  // if (grand_total <= 300) {
  //   discount = 10
  // } else if (grand_total > 300 && grand_total <= 500) {
  //   discount = 15
  // } else if (grand_total > 500 && grand_total <= 700) {
  //   discount = 20
  // }
  // else if (grand_total > 700) {
  //   discount = 25
  // }
  return discount
}