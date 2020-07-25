const types = {
  SUCCESS_AUTH: 'SUCCESS_AUTH',
  FAILURE_AUTH: 'FAILURE_AUTH'
}

export const handleSuccessAuth = (data) => ({
  type: types.SUCCESS_AUTH,
  payload: data
})

export const handleFailureAuth = (data) => ({
  type: types.FAILURE_AUTH,
  payload: data
})