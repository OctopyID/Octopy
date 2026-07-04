<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = () => {
  // Simulate API call
  isSubmitting.value = true
  
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    
    // Reset form after a while
    setTimeout(() => {
      isSuccess.value = false
      form.value = { name: '', email: '', subject: '', message: '' }
    }, 5000)
    
  }, 1500)
}
</script>

<template>
  <div class="bg-surface-raised border border-border rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden">
    
    <div v-if="isSuccess" class="absolute inset-0 z-10 bg-surface-raised flex flex-col items-center justify-center p-8 text-center">
      <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
        <Icon name="ph:check-bold" size="32" />
      </div>
      <h3 class="text-2xl font-bold text-text-primary mb-2">Message Sent</h3>
      <p class="text-text-secondary">Thank you for reaching out. I'll get back to you shortly.</p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label for="name" class="text-sm font-medium text-text-secondary">Name</label>
          <input 
            id="name"
            v-model="form.name"
            type="text" 
            required
            class="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div class="space-y-2">
          <label for="email" class="text-sm font-medium text-text-secondary">Email</label>
          <input 
            id="email"
            v-model="form.email"
            type="email" 
            required
            class="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div class="space-y-2">
        <label for="subject" class="text-sm font-medium text-text-secondary">Subject</label>
        <input 
          id="subject"
          v-model="form.subject"
          type="text" 
          required
          class="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
          placeholder="Project Inquiry"
        />
      </div>
      
      <div class="space-y-2">
        <label for="message" class="text-sm font-medium text-text-secondary">Message</label>
        <textarea 
          id="message"
          v-model="form.message"
          rows="5"
          required
          class="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        :disabled="isSubmitting"
        class="w-full inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all h-14 px-8 bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-70 disabled:cursor-not-allowed shadow-glow"
      >
        <Icon v-if="isSubmitting" name="ph:spinner-gap-bold" class="animate-spin mr-2" size="20" />
        <span v-else class="flex items-center gap-2">Send Message <Icon name="ph:paper-plane-right-bold" /></span>
      </button>
      
    </form>
  </div>
</template>
