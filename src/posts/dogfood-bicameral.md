---
title: Less is More when it comes to AI
subtitle: How we applied SDLC learnings to dogfood Bicameral
date: "2026-02-20"
published: false
---

**If you are previously subscribed to our newsletter, you are automatically whitelisted and will be granted access to our very first release. More details below.**

> You don't know what you want. That's why asking questions doesn't work. You think you know it, but only after you've spent some time iterating in the space of solutions, you'll see the path forward.

After taking in [your perspectives](https://news.ycombinator.com/item?id=46954899) on how AI codegen fits into overall software development lifecycle in our previous post, we decided that it is time to break the ground and begin work on building Bicameral.

Throughout this process, we used AI codegen extensively, and probably committed every SDLC sin in the book, which we were careful to document and compare against your comments.

<img src="/images/process-dogfood.png" alt="Our SDLC mistakes while building Bicameral" style="max-width: 800px; width: 100%; display: block; margin: 0 auto;" />

This process taught us an important lesson: ruthlessly guarding noise vs signal consumption and production is crucial when it comes to effective AI tool use.

So in a space overcrowded with flashy tools, we will dedicate this article to outlining AI best practices that worked for us _without_ relying on more tools.

### 1. Housekeeping for documentation

Our first finding is not a sexy one.

We encountered many instances in which the agents snuck in design choices from previous iterations, simply because we haven't updated our docs to reflect our latest thinking.

> Once you have a comprehensive plan together… agents have a lot of issues zooming out… they get weighted down heavily by what already exists.

We knew going in that business context dovuments are needed for effective use of agents, but it did not strike us how much of a commitment it would be to constantly refresh our specs in order to capture the _delta_ in product direction.

A simple meeting is sufficient to get a team of engineers to pivot towards a new sprint objective, yet coding agents need to be hand-fed curated pieces of information in order to perform well.

This calls for some housekeeping. We decided to deprecate all the research docs we have gathered over the past month (ouch!) in order to unclog agent context.

<img src="/images/github-galore.png" alt="Cleaning up our docs" style="max-width: 200px; width: 100%; display: block; margin: 0 auto;" />

Instead, we adapted our documentation to fit our needs: creating bite-sized decision docs for each subcomponent and keeping repo-level docs clear of implementational details. Doing so allowed us to trust the output more, and moreover forced us to evaluate the relevance of previous decisions while prompting.

Context engineering as a practice has gotten a lot of attention lately, so we will link two perspectives that guided our approach:

- [Inside Claude Code With Its Creator Boris Cherny](https://youtu.be/PQU9o_5rHC4?si=9CCXBJDM7FilGJyP&t=540)
- [Delete your CLAUDE.md](https://www.youtube.com/watch?v=GcNu6wrLTJc)

We also experimented with end-to-end coding assistants (we use Conductor) that specs, codes and tests new features all in one go, but found that it very quickly creates a dependence relationship that makes future updates unpredictable.

Sticking to good ol' prompting on the other hand allowed us to inject context that is strictly necessary for the task, do some preliminary sanity checks, and have visibility over the agent's thought process (the diff streaming feature of Codex is very much appreciated).

<img src="/images/codex-diff.png" alt="Codex surfacing code diffs" style="max-width: 800px; width: 100%; display: block; margin: 0 auto;" />

In summary, we found that knowing exactly what we are feeding into agents makes a big difference in the reliability of outcomes, and that is achieved either through specific references in manual prompting, or putting module-level docs in place for agent discovery.

It is more likely for agents to be derailed by stale designs than for it to come up with smarter solutions because of additional context.

### 2. It is easy to accidentally delegate decision-making to AI

The next one is more pernicious. Coding agents usually comes with a "planning" phase, where feature scope and architectural recommendations are surfaced. But the important thing to note is that planning _isn't_ design, even though it is easy to conflate the two.

<img src="/images/sdlc.webp" alt="Cleaning up our docs" style="max-width: 600px; width: 100%; display: block; margin: 0 auto;" />

Broadly speaking, the planning phase is concerned with what, one which LLMs built for efficient retrieval excel at, whereas design is concerned with _how_, a step that calls for judgment and discernment.

We learned first-hand the cost of inappropriately relying on AI in the design process. We wasted a week optimizing for better prompts and building out an internal testing harness for Bicameral, only to throw it all away when my collaborator and I whiteboarded and concluded that in fact save for input and output.

We went down a rabbithole prompt optimization because because our initial architectural intuition was not challenged: _"Perhaps we can consider static analysis and test how far we can get without relying on LLMs?"_ was never on the menu of AI suggestions.

The comment section :

> "The goal of an LLM is not to give you correct answers. The goal of an LLM is to continue the conversation."

> counterproposals and negative feedback are rarely up to snuff with something a staff level colleague would come up with

Our coding assistants adopted our headspace and gave us conviction in . It was trained to recognize patterns after all, not _breaking_ it.

But more often than not, design requires out-of-box thinking that. As a developer, this is the exact spot where one should take a step back and holistically evaluate what AI surfaced during the planning phase.

That said, we cannot discount the contributions from AI findings that made its way into our eventual design.

> scoping, identifying pain points and planning - actually got massively better with coding agents. - Havoc

So how do we get the best of both worlds?

The study corroborates, which found that AI reliance compromises debugging ability, whereas those who use AI primarily for inquiry got the best of both worlds (productivity + learning).

> colechristensen (46955674): arguing over current/prototype solution is more productive than abstract future plans.

Deliberately making space between spec and implementation.

[insert barbell imagery]

Use AI for research and eventual implementation. That way, the intuition of developers, especially concerning , can blend with the rigor of LLMs to surface Barbell approach: heavy at the beginning, and heavy towards the end when all specs have been validated and we just need something working end-to-end.

### A new plane of collaboration?

but the irony stands clearly for us. That AI should tailor to human ways of doing things, not the other way round. but practically speaking, it .. It may serve indepedent developers working on prototyping, certainly wasn't designed with the holistic needs of development teams in mind.

In fact, AI codegen execels in initial research & eventual implementation led to adopt a rather curious workflow internally:

<img src="/images/two-pass-development.png" alt="Cleaning up our docs" style="max-width: 700px; width: 100%; display: block; margin: 0 auto;" />

Requirement gaps, the middle part. How to get around it .. We started to create experimentation, and only after all the edges ().. "soft-commit", in order to bring findings together, and only then branch from a central source ..

> noduerme (46955345): do initial technical exploration yourself, identify real constraints/tradeoffs, then use AI to summarize effort/options.

AI is asking humans to do more of what (documentation), and less of what developers enjoy (coding). What a twist!

Allow developers to benefit from the gains of AI, while gradual change.

If these sound like gruntwork that are distracting you from core dev that excites you - Bicameral is here to help. We are effectively automating the first pass.

Async discussion - constrain meetings to discussing what have already been explored asynchronously.

[insert diagram detailing our flow]

Your access is tied to your email, filled out survey previously or subscribed to our newsletter. Help us spend our development credits!

it can't directly challenge your super long-range assumptions the same way as another person saying at the standup "this unrelated feature already does something similar, so maybe you can modify it to accomplish both the original goal and your goal", or they might say "we have this feature coming up, which will solve your goal".

Recommended follow: https://x.com/arscontexta

A comment on our previous article caught our eyes:

> Why 'just meet better' doesn't work". ('stakeholders' aren't realy, they are not comfortable with the required level of detail, lack both in depth business domain, operational domain and technical domain knowledge, bikeshedding fiestas masking incompetence, ...)

> pmontra (46867266): AI speeds coding, but teams still fail by choosing wrong backlog priorities.

This is the challenge we aim to resolve, with your help. How can we assist in your - could it , or that makes it easy for you to make your case?

If you have more thoughts around what kind of information actually sticks and makes a difference in cross-functional team meetings.

Privacy Disclosure:

Your feedback is appreciated.
