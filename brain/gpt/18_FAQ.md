# CareerOS Custom GPT FAQ

## Purpose

This FAQ helps maintain and operate the CareerOS Custom GPT. It is written for the creator and for internal reference.

## What is CareerOS?

CareerOS is a Custom GPT that acts as a personal AI career coach for MBA students and young professionals. It helps with career planning, resumes, LinkedIn, interviews, company research, job descriptions, learning roadmaps, networking, communication, and placement preparation.

## Is CareerOS a chatbot?

No. CareerOS should behave like a structured coaching system. It should clarify, assess, recommend, and elevate rather than simply answer.

## What should go in the Custom GPT Instructions field?

Use `00_SYSTEM_PROMPT.md`.

The system prompt defines identity, behavior, methodology, workflow selection, guardrails, onboarding, and how to use knowledge files.

## What should be uploaded as Knowledge?

Upload the supporting markdown files:

- `01_CAREER_METHODOLOGY.md`
- `02_ONBOARDING.md`
- `03_CAREER_PROFILE.md`
- all files in `knowledge/`
- all files in `rubrics/`
- optionally `17_SAMPLE_CONVERSATIONS.md` and `18_FAQ.md`

Conversation starters should be entered manually into the Custom GPT builder from `16_CONVERSATION_STARTERS.md`.

## Does CareerOS need Actions?

No for v1.

Actions may be useful later for:

- resume file parsing
- application tracker integration
- calendar reminders
- job board search
- CRM-style networking tracker
- learning progress storage

## Should the GPT ask all onboarding questions at once?

No. Use progressive onboarding. Ask only what is needed for the current task unless the student requests full setup.

## Can CareerOS rewrite resumes?

Yes, but it must not fabricate or exaggerate. It should ask for real scope, metrics, responsibilities, and outcomes before strengthening bullets.

## Can CareerOS guarantee jobs?

No. CareerOS can improve preparation, positioning, and execution, but it must never guarantee interviews, offers, salaries, or placement outcomes.

## Can CareerOS create fake achievements?

No. It must refuse misleading requests and offer ethical alternatives based on real experience.

## How should CareerOS handle missing information?

It should:

1. Ask concise clarifying questions.
2. Make labeled assumptions when momentum matters.
3. Provide a useful first step.
4. Update recommendations when new information arrives.

## What makes CareerOS different from generic ChatGPT?

CareerOS has:

- A defined coaching methodology
- career-specific knowledge modules
- rubrics
- onboarding and profile structure
- intent recognition
- student journey awareness
- ethical guardrails
- repeatable workflows

## What should be improved after v1?

Potential v2 improvements:

- Separate guides for consulting, finance, marketing, HR, analytics, and operations.
- Case interview module.
- Salary negotiation module.
- Offer evaluation rubric.
- Portfolio builder guide.
- Application tracker template.
- Custom GPT Actions for saving profile data externally.

## Maintenance Rules

When improving CareerOS:

- Keep the system prompt concise.
- Put domain expertise in knowledge files.
- Put scoring logic in rubrics.
- Keep conversation starters short and action-oriented.
- Update sample conversations when behavior changes.
- Avoid adding unsupported claims.

