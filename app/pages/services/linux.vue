<script setup lang="ts">
useSeoMeta({
  title: 'Linux Server Engineering | Octopy ID',
  description:
    'High-availability architecture, security hardening, and performance tuning for Linux environments.',
});

const deliverables = [
  'High-Availability (HA) Cluster Design',
  'Automated CI/CD Pipeline Integration',
  'Kernel & Network Performance Tuning',
  'Comprehensive Security Hardening',
  'Docker Swarm & Kubernetes Deployments',
  '24/7 Monitoring & Alerting Setup',
];
</script>

<template>
  <ServicesServiceLayout
    title="Linux Server Engineering"
    subtitle="Transforming raw bare-metal servers and cloud instances into resilient, high-performance infrastructure."
    icon="ph:terminal-window-duotone"
    :deliverables="deliverables"
  >
    <p>
      In the modern web, application logic is only as good as the infrastructure it runs on. I
      specialize in architecting Linux environments that are secure by default, highly available,
      and optimized for maximum throughput.
    </p>
    <p>
      Whether you are migrating from shared hosting to a dedicated fleet or optimizing an existing
      cloud architecture on AWS/GCP/DigitalOcean, I ensure your infrastructure acts as a solid
      foundation, not a bottleneck.
    </p>
    <h3>The Approach</h3>
    <p>
      My methodology revolves around <strong>Infrastructure as Code (IaC)</strong> and immutable
      server patterns. Every configuration change is documented, tested, and reproducible,
      eliminating the "it works on my machine" paradigm.
    </p>
  </ServicesServiceLayout>
</template>
