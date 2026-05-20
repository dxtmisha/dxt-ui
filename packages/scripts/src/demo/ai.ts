#!/usr/bin/env vite-node

import { useAi } from '../composables/useAi'

const ai = useAi()

ai?.generate('Who are you?')
  .then((response) => {
    console.log('ai response: ', response)
  })
