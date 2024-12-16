export const ERROR_MESSAGES = {
  GENERIC: 'An error occurred. Please try again later.',
  NETWORK: 'Network error. Please check your connection.',
  VALIDATION: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
} as const

export const SUCCESS_MESSAGES = {
  SAVED: 'Successfully saved!',
  UPDATED: 'Successfully updated!',
  DELETED: 'Successfully deleted!',
} as const

export const MEDICAL_DISCLAIMER = `
  This information is for educational purposes only and is not intended to be a substitute 
  for professional medical advice, diagnosis, or treatment. Always seek the advice of your 
  physician or other qualified health provider with any questions you may have regarding 
  a medical condition.
` as const