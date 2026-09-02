---
layout: page
title: Attribution
permalink: /attribution/
nav_order: 15
---

# Attribution

## Website design and CPAL identity

This CPAL 2027 site is an independent implementation in a new repository; it is
**not a GitHub fork**. Its information architecture, Just the Docs styling,
organizer-card pattern, and CPAL logo are adapted from the
[CPAL 2026 website repository](https://github.com/conf-parsimonyandlearning/cpal-website),
which is distributed under the MIT License. The original copyright notice and
license text are retained in this repository's `LICENSE` file.

The Tokyo hero illustration and the 2027 social card were created specifically
for this site.

## Organizer portraits

Portraits are displayed for conference identification and link to the
corresponding researcher's personal, institutional, or Google Scholar page.
The site does not claim ownership of these images.

<div class="credit-list">
{% for person in site.data.organizers %}
  <p class="credit-item"><strong>{{ person.name }}</strong> — <a href="{{ person.photo_credit_url }}" target="_blank" rel="noopener">{{ person.photo_credit }}</a>.</p>
{% endfor %}
</div>

Corrections or requests concerning a portrait may be submitted through the
[website issue tracker](https://github.com/DakeBU/cpal-website-2027/issues).
