# CareerOS v1 - Development Instructions

## Overview

You are an experienced Senior Full Stack Engineer and Product Designer.

Your task is to build Version 1 of **CareerOS**.

CareerOS is NOT an AI chatbot.

CareerOS is a lightweight web portal that helps students activate their personal AI Career Coach inside ChatGPT, Claude or Gemini.

The website should feel like a polished SaaS landing page rather than a college project.

Keep everything simple.

Elegant.

Minimal.

Fast.

Responsive.

Beautiful.

Avoid feature creep.

---

# Primary Goal

A student attending my seminar should be able to

1. Scan a QR Code
2. Open the CareerOS website
3. Understand what CareerOS is
4. Activate CareerOS within 2 minutes
5. Continue using CareerOS in ChatGPT or Claude

without needing any explanation.

---

# Important

This project DOES NOT require

- Backend
- Database
- Authentication
- User Login
- APIs
- AI Integration
- Payments
- Analytics

Everything is static.

---

# Technology Stack

Use

- Next.js (Latest)
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion
- Lucide Icons

The application must support

- Static Export
- GitHub Pages deployment

---

# Design Style

The design should feel inspired by

- OpenAI
- Apple
- Linear
- Notion
- Stripe

Minimal.

Premium.

Lots of whitespace.

Rounded cards.

Excellent typography.

Responsive.

Mobile First.

Dark Mode.

---

# Website Structure

CareerOS consists of only five pages.

## 1. Home

Purpose

Explain what CareerOS is.

Sections

Hero

Headline

CareerOS

Subtitle

Your Personal AI Career Coach

Description

CareerOS helps students build better resumes, optimize LinkedIn, prepare for interviews, research companies and become AI-first professionals.

Primary CTA

Activate CareerOS

Secondary CTA

Explore Features

Feature Cards

Resume

LinkedIn

Interview Preparation

Company Research

JD Analysis

Learning Plans

Networking

Footer

---

## 2. Activate CareerOS

This is the most important page.

The activation process should feel like installing software.

Layout

-----------------------------------

Step 1

Copy CareerOS Prompt

Large Copy Button

(Currently placeholder text)

When clicked

Show

✓ Prompt Copied

-----------------------------------

Step 2

Choose your AI Platform

Display beautiful cards

🟢 ChatGPT

🟣 Claude

🔵 Gemini

Each card should contain

Logo

Short Description

Open Button

The button can initially point to

https://chatgpt.com

https://claude.ai

https://gemini.google.com

Future versions will use deep links.

-----------------------------------

Step 3

Instructions

1. Open a New Chat

2. Paste the copied prompt

3. Press Send

4. CareerOS is activated

Display a success illustration.

---

## 3. Features

Purpose

Show everything CareerOS can help students with.

Create beautiful cards.

Examples

Resume Builder

LinkedIn Optimizer

Interview Coach

Company Research

Job Description Analysis

Networking

Career Roadmap

Learning Planner

Communication Coach

Weekly Review

Each card

Icon

Title

Short Description

---

## 4. AI Resources

Recommend AI tools.

Create clean cards.

Each card

Logo

Tool Name

Purpose

Recommended Usage

Initial tools

ChatGPT

Claude

Perplexity

Gamma

Canva

Otter

HeyGen

Leave room for future additions.

---

## 5. FAQ

Questions

What is CareerOS?

Do I need ChatGPT Plus?

Can I use Claude?

Can I use Gemini?

Do I need to copy the prompt every time?

Can I upload my resume?

Will CareerOS remember my information?

Can I use CareerOS after graduation?

Accordion style.

---

# Navigation

Home

Activate

Features

Resources

FAQ

Sticky Navigation

Smooth scrolling

Mobile Hamburger Menu

---

# Mobile Experience

This website will primarily be used by students on mobile phones.

Design mobile-first.

The activation experience must be extremely simple.

Students should never feel overwhelmed.

---

# Components

Create reusable components.

Hero

FeatureCard

ToolCard

FAQAccordion

StepCard

Navigation

Footer

CTAButton

SectionHeading

---

# Folder Structure

Use a clean project structure.

pages/app

components

data

public

styles

lib

content

Future content should be easy to update.

Avoid hardcoding large datasets inside components.

---

# Placeholder Content

The actual CareerOS Prompt has not yet been written.

Create placeholders.

Example

"CareerOS Master Prompt Coming Soon"

The Copy Button should still work using placeholder text.

---

# Animations

Subtle only.

Fade

Slide

Hover

No excessive motion.

---

# Accessibility

Semantic HTML

Keyboard navigation

Proper contrast

ARIA where appropriate

---

# Performance

Optimize images.

Fast loading.

Lighthouse friendly.

---

# SEO

Include

Title

Description

Open Graph

Favicon

Meta Tags

---

# GitHub Pages

The project must be deployable directly to GitHub Pages.

Provide

README

Deployment instructions

Build commands

---

# Deliverables

I expect

✓ Production-quality code

✓ Responsive UI

✓ Clean architecture

✓ Reusable components

✓ Modern design

✓ GitHub Pages ready

✓ Easy future expansion

---

# Future Scope (Do NOT Implement)

Authentication

CareerOS Backend

Custom GPT Integration

Claude Projects

Prompt Packs

Knowledge Packs

Career Analytics

User Accounts

Admin Dashboard

These are intentionally excluded from Version 1.

Keep Version 1 lightweight.

---

# Success Criteria

A student should be able to scan a QR code, activate CareerOS in less than two minutes, and immediately understand its purpose.

The website should feel like a polished product rather than a prototype.