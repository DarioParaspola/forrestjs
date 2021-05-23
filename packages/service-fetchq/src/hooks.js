const SERVICE_NAME = `fetchq`;
const FETCHQ_REGISTER_QUEUE = `${SERVICE_NAME}/register/queue`;
const FETCHQ_REGISTER_WORKER = `${SERVICE_NAME}/register/worker`;
const FETCHQ_READY = `${SERVICE_NAME}/ready`;
const FETCHQ_BEFORE_START = `${SERVICE_NAME}/before-start`;

module.exports = {
  SERVICE_NAME,
  FETCHQ_REGISTER_QUEUE,
  FETCHQ_REGISTER_WORKER,
  FETCHQ_READY,
  FETCHQ_BEFORE_START,
};
