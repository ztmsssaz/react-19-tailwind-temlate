interface RuntimeConfig {
   API_BASE_URL: string
}

let config: RuntimeConfig = {
   API_BASE_URL: '', // fallback if needed
}

export const loadRuntimeConfig = async () => {
   const res = await fetch('/runtime-config.json')
   config = await res.json()
}

export const getRuntimeConfig = () => config
