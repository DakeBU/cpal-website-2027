---
layout: page
title: Attribution
permalink: /attribution/
nav_exclude: true
---

# Attribution

## Website design and CPAL identity

This CPAL 2027 site is an independent implementation in a new repository; it is **not a GitHub fork**. Its information architecture, Just the Docs styling, organizer-card pattern, CPAL logo, and footer conventions are adapted from the [CPAL 2026 website repository](https://github.com/conf-parsimonyandlearning/cpal-website), distributed under the MIT License. The original license text is retained in this repository's `LICENSE` file.

## Tokyo splash photograph

The site splash uses **“20110405-TokyoTower-Sakura01.jpg”**, a spring view of Zōjō-ji and Tokyo Tower by Wikimedia Commons user 東京太郎 / Taro Tokyo, licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20110405-TokyoTower-Sakura01.jpg). The website displays the photograph with reduced opacity and light color treatment to match CPAL's established splash style.

## Venue imagery and maps

The Hitotsubashi Hall / National Center of Sciences entrance photograph on the venue page is displayed from the [ACSOS 2025 Hitotsubashi Hall venue page](https://2025.acsos.org/venue/acsos-2025-venue). The access map is provided by the official [Hitotsubashi University Hitotsubashi Hall access page](https://www.hit-u.ac.jp/hall/accessen.html). These materials are used for conference-location identification; CPAL does not claim ownership of them.

## Organizer portraits

Portraits are displayed for conference identification and link to the corresponding researcher's personal, institutional, or Google Scholar page. The site does not claim ownership of these images.

<div class="credit-list">
{% for person in site.data.organizers %}
  {% if person.name == 'Atsushi Nitanda' %}
  <p class="credit-item"><strong>Atsushi Nitanda</strong> — portrait supplied directly to the CPAL 2027 Web Chair.</p>
  {% else %}
  <p class="credit-item"><strong>{{ person.name }}</strong> — <a href="{{ person.photo_credit_url }}" target="_blank" rel="noopener">{{ person.photo_credit }}</a>.</p>
  {% endif %}
{% endfor %}
</div>
