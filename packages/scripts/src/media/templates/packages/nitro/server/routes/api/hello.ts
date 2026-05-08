import { defineHandler } from 'nitro'

export default defineHandler(() => {
  return {
    status: 'success',
    message: 'Hello from Nitro API!',
    timestamp: new Date().toISOString(),
    data: {
      version: '1.0.0',
      description: 'This is a test API route for dxt-ui demo.'
    }
  }
})
