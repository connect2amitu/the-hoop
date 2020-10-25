// export const HOST_API = "http://localhost/dgsm"
export const HOST_API = window.location.host.indexOf("dgsm.in") > -1 ? "https://admin.dgsm.in" : "http://localhost/dgsm"

export const SESSION_EXPIRED_URL = '/404';
export const OK_STATUS = 200;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const NOT_FOUND = 404;
export const MEDIA_ERROR_STATUS = 415;
export const VALIDATION_FAILURE_STATUS = 417;
export const DATABASE_ERROR_STATUS = 422;
export const INTERNAL_SERVER_ERROR = 500;

export const RAZORPAY = {
  key: "rzp_test_BMaQmSDBN55exk",
  secret: "eVO15UPAhFRiUSzRAGI2nKwf"
};

var date = new Date();
date.setDate(date.getDate() + 30);

export const COOKIE_OPTION = { path: '/', expires: date }

export const SECRET_KEY = "thehoop"

