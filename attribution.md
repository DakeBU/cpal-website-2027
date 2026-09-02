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

The home-page splash uses **“20110405-TokyoTower-Sakura01.jpg”**, a spring view of Zōjō-ji and Tokyo Tower by Wikimedia Commons user 東京太郎 / Taro Tokyo, licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20110405-TokyoTower-Sakura01.jpg). The website displays the photograph with reduced opacity and light color treatment to match CPAL's established splash style.

## Organizer portraits

Portraits are displayed for conference identification and link to the corresponding researcher's personal, institutional, or Google Scholar page. The site does not claim ownership of these images.

<div class="credit-list">
{% for person in site.data.organizers %}
  <p class="credit-item"><strong>{{ person.name }}</strong> — <a href="{{ person.photo_credit_url }}" target="_blank" rel="noopener">{{ person.photo_credit }}</a>.</p>
{% endfor %}
</div>
