import { defineStore } from 'pinia'

type Payload = {
  mail: string,
  password: string
}

export const useAuthStore = defineStore({
  id: 'auth-store',

  state: () => {
    return {
      auth: false
    }
  },

  getters: {
    isAuthenticated: state => state.auth
  },

  actions: {
    async login(payload: Payload) {
      if (payload.mail === 'admin' && payload.password === 'admin') {
        this.auth = true
        console.log('login success')
      } else {
        this.auth = false
        console.log('login failed')
      }
    },

    async logout() {
      this.auth = false
      console.log('logout success')
    }

  }
}
)