<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

const handleSubmit = () => {
  // Simulate API call
  isSubmitting.value = true;

  setTimeout(() => {
    isSubmitting.value = false;
    isSuccess.value = true;

    // Reset form after a while
    setTimeout(() => {
      isSuccess.value = false;
      form.value = { name: '', email: '', subject: '', message: '' };
    }, 5000);
  }, 1500);
};
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-6 shadow-sm md:p-10"
  >
    <div
      v-if="isSuccess"
      class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-raised p-8 text-center"
    >
      <div
        class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500"
      >
        <Icon name="ph:check-bold" size="32" />
      </div>
      <h3 class="mb-2 text-2xl font-bold text-text-primary">Message Sent</h3>
      <p class="text-text-secondary">Thank you for reaching out. I'll get back to you shortly.</p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="space-y-2">
          <label for="name" class="text-sm font-medium text-text-secondary">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text-primary transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
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
            class="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text-primary transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
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
          class="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text-primary transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
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
          class="w-full resize-none rounded-lg border border-border bg-bg px-4 py-3 text-text-primary transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="inline-flex h-14 w-full items-center justify-center rounded-lg bg-primary-500 px-8 text-sm font-medium text-white shadow-glow transition-all hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Icon v-if="isSubmitting" name="ph:spinner-gap-bold" class="mr-2 animate-spin" size="20" />
        <span v-else class="flex items-center gap-2"
          >Send Message <Icon name="ph:paper-plane-right-bold"
        /></span>
      </button>
    </form>
  </div>
</template>
