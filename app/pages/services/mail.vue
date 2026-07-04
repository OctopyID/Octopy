<script setup lang="ts">
useSeoMeta({
  title: 'Enterprise Mail Infrastructure | Octopy ID',
  description:
    'Deliverability-focused custom mail servers, Postfix/Dovecot optimization, and spam prevention.',
});

const deliverables = [
  'Custom Postfix & Dovecot Architecture',
  'SPF, DKIM, and DMARC Implementation',
  'IP Reputation & Deliverability Audits',
  'Anti-Spam & Anti-Virus Filtering',
  'High-Volume SMTP Relays',
  'Webmail & CalDAV/CardDAV Setup',
];
</script>

<template>
  <ServicesServiceLayout
    title="Enterprise Mail Infrastructure"
    subtitle="Regain control of your communication with self-hosted, secure, and deliverability-optimized mail servers."
    icon="ph:envelope-simple-duotone"
    :deliverables="deliverables"
  >
    <p>
      Self-hosting email is notoriously difficult due to strict spam filters and IP reputation
      management. I take the complexity out of enterprise mail by designing clustered Postfix and
      Dovecot environments that guarantee deliverability and security.
    </p>
    <p>
      From high-volume transactional SMTP relays to full-suite corporate mail servers, I ensure your
      emails hit the inbox, not the spam folder.
    </p>
    <h3>Deliverability First</h3>
    <p>
      Perfect deliverability requires perfect DNS hygiene. I configure flawless SPF, DKIM, and
      strict DMARC policies, coupled with automated IP warmup strategies and real-time blocklist
      (RBL) monitoring.
    </p>
  </ServicesServiceLayout>
</template>
