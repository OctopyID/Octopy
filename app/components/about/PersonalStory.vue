<template>
  <section class="py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 md:grid-cols-12">
        <!-- Text -->
        <div class="md:col-span-7">
          <div class="mb-6 flex items-center gap-3">
            <div class="h-px w-12 bg-primary-500"></div>
            <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">The Person</h2>
          </div>

          <h3 class="mb-8 text-3xl leading-tight font-extrabold text-text-primary md:text-5xl">
            Supian M. <br />
            <span class="text-text-secondary">Architect & Executor.</span>
          </h3>

          <div class="prose max-w-none text-lg leading-relaxed text-text-secondary prose-invert">
            <p class="mb-6">
              I've been writing code since 2014 and working professionally since 2019. I don't focus
              on titles like "senior", but the open-source libraries I've authored have reached over
              125,000 users and continue to grow. My approach to software is direct, transparent,
              and entirely execution-oriented.
            </p>
            <p>
              I value honesty above all else. Before a client even hires me, I often advise them on
              cost-effective, practical solutions they can try first. Over the years, I've traversed
              the full stack—from tweaking kernel parameters on bare-metal Linux servers to building
              modern web applications. When I take on a project, I own it from the DNS records down
              to the CSS utilities.
            </p>
            <div class="mt-10">
              <a
                href="/Supian_M_Resume.pdf"
                target="_blank"
                class="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary-500 px-6 text-sm font-medium text-white shadow-glow transition-colors hover:bg-primary-600 focus-visible:ring-2 focus-visible:ring-interactive focus-visible:outline-none"
              >
                <Icon name="ph:file-pdf-duotone" size="20" />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative mt-8 md:col-span-5 md:mt-0">
          <div
            class="absolute inset-0 translate-x-4 translate-y-4 transform rounded-2xl border border-primary-500/20 bg-primary-500/10"
          ></div>
          <NuxtImg
            src="/images/me.png"
            alt="Supian M Portrait"
            class="relative aspect-[4/5] w-full rounded-2xl border border-border bg-surface object-cover shadow-lg"
            width="400"
            height="500"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
