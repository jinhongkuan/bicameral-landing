---
title: Why "just prompt better" doesn't work
subtitle: How coding assistants get in the way of constraints discovery
date: "2026-02-06"
---

Earlier this week we published ["Coding assistants are solving the wrong problem"](https://news.ycombinator.com/item?id=46866481), which made it to the HackerNews front page and drew responses from developers across industries and roles.

We learned a lot from the (40+) survey responses that poured in, as well as the heated debate on how coding assistants impact software development. The latter deserves its own article-a separate post curating best practices in coding agent setup is in the works.

For this follow-up article however, we will focus on main findings that connected the dots for us why AI adoption on average led to an increase in time spent on review, rework and re-alignment tasks commensurate with the development time that it saves ([Atlassian, 2025](https://www.atlassian.com/blog/developer/developer-experience-report-2025)). We will use firsthand accounts from commentators to illustrate friction points along the entire product lifecycle.

### Finding 1: Communication friction is \*the\* distinguishing pain point

We asked developers: _when_ do you discover that the code doesn't work the way people think it does? And separately: _who_ needs to know when you find a technical constraint?

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0; align-items: flex-start;">
  <img src="/images/constraint-discovery.svg" alt="When developers discover constraints" style="flex: 1 1 320px; max-width: 55%;" />
  <img src="/images/context-delivery-gap.svg" alt="Who needs to know about constraints" style="flex: 1 1 280px; max-width: 45%;" />
</div>

_Left: A third of technical constraints were already in a product conversation. Right: 70% of those constraints need to reach people who don't regularly interact with the codebase._

These two charts, taken together, reveals the deeply cross-functional nature of the problem we are dealing with.

Let's start with an observation from the first graph: one-third of constraints are discovered _during_ planning sessions - sprint planning, product-engineering syncs, 1:1s with their PM. That's great, that means they can be addressed during initial discussions right? Not so fast-

> The issue is all context. Small decisions have to be made by design/eng based on discovery of product constraints, but communicating this to stakeholders is hard and time consuming and often doesn't work.

Why might surfacing constraints be a challenging process? Commentators point to two general categories of challenges: articulating complex technical dependencies on-the-fly, and translating it into business impact that will move the needle on product scoping decisions:

> A senior engineer might recall that a 'simple filter' touches three microservices. A mid-level one won't — not because they lack skill, but because the cognitive load is unreasonable.

> I can push back, sometimes it works, sometimes they have political reasons to disregard technical problems, which means it will always be my problem.

When 70% of technical constraints need to reach people who don't regularly interact with the codebase, known issues often goes unresolved until the pain becomes evident further down the line.

But what can we say about the 50% of constraints that were discovered only during implementation? Why are they so numerous, and how are they addressed? Here we get to the meat of how software development in the real world quite unlike the

> Product meetings often have a form of hand-waviness to details. The little assumptions which are out of place are what slow down a project the most.

> You only get to know these issues once you started coding them by hand. You go through the variables and function calls and suddenly remember a process elsewhere changes.

Since product meetings go through feature specifications in broadstrokes, it is only after some technical scaffolding is in place that the exact manner in which engineering reality clashes with product requirements becomes apparent. The devil, in other words, is in the detail.

This brings to light a significant aspect of implementation phase: it serves a dual-purpose of _context discovery_, a fact that we will return to in our analysis of AI impact in the section below.

For now, we close out our survey analysis with respondents' diagnosis of why downstream realignment is expensive - communication latency and redundant conversations:

> Product not always available to answer questions during implementation as we always discover issues

> [Difficulty] confirming that ideas and goals are communicated successfully and everyone involved understands them. Especially at the stage where we confirm that everything is completed (QA, UAT, etc)

This is further aggravated by fragmented documentation of decisions made upon discovered constraints, as indicated by survey results:

- 52% share constraints via copy-paste to Slack
- 25% mention verbally — no written record at all
- 35% of all constraint communication leaves no persistent artifact

In summary, the crux of developer frustrations lies in communication friction. Developers intuit problems that might arise but either struggle to effectively get that across to those making product decisions, or lack the evidence to make their case stick, both of which they know will be far more costly to deal with downstream (repeated conversations and reworks).

The message we received is loud and clear: what is needed is not another code analysis or documentation tool, but _ammunition_ to drive cross-functional alignment upstream.

<img src="/images/why-alignment-fails.svg" alt="Where the product-engineering handoff breaks down" style="max-width: 640px; width: 100%; display: block; margin: 0 auto;" />

### Finding 2: The problem is not that AI can't write good code — it's that it can't refuse to write bad ones

The impetus behind our initiative was a dawning realization that AI adoption will worsen the problems laid out above, but combing through user comments clarified for us the exact mechanics by which coding assistants amplifies the cost of misalignment.

We start with an insightful comment from that highlights the limitations of relying on AI for software development:

> Where AI fails us is when we build new software to improve the business. The tasks are never really well defined. Sometimes developers come up with a better way to do the business process than what was planned for. AI can write the code, but it doesn't refuse to write the code without first being told why it wouldn't be a better idea to do X first." — [Quothling](https://news.ycombinator.com/item?id=46866481)

Coding agents are _designed_ to be accommodating, it doesn't push back against prompts since it neither has the authority nor the context to do so. It may ask for clarifications upon what was specified, but it won't say "wait, have you considered doing X instead?" A human developer would, or at least, they'd raise a flag. An LLM produces plausible output and moves on.

This trait may be desirable as a virtual assistant, but it makes for a bad engineering teammate. The willingness to engage in productive conflict is part and parcel to good engineering: it helps broaden the search in the design space of ideas.

Several commentators pushed back: just prompt better!

> An LLM will do what you ask it to do! If you tell it to ask questions and poke holes into your requirements and not jump to code, it will do exactly that

But here's where the earlier statistics jumps out: 50% of developers in our survey discover constraints during implementation. "Just prompt better" _assumes_ foreknowledge by the prompter of the exact ways in which product and technical constraints may conflict, when we have previously established that such constraints could only have been uncovered iteratively through cross-functional dialogue.

> Humans can imagine scenarios where a process can break. Claude can also do it, but only when the breakage happens from inside the process and if you specify it. It can not identify future issues from a separate process unless you specifically describe that external process — [adithyassekhar](https://news.ycombinator.com/item?id=46867223)

In fact, the Cursor team recently experimented with long-running autonomous coding agents, and noted that initial attempts failed because agents interpreted instructions to the letter and [went down obscure paths](https://cursor.com/blog/self-driving-codebases#specifying-intent-to-agents). Human intervention at the planning phase was needed to infuse the holistic understanding necessary for agents to behave as expected.

This is even more true in enterprise environments where business requirements are ill-specified yet precision is critical. The full specification doesn't exist in any single documentation they can access. It's distributed across the codebase, the PM's head, the marketer's promises, and three Slack threads from last quarter. The transmission of context still _has_ to happen, automating code generation just moved the exchange down the chain where it is most secluded from where decision was made.

This makes it clear what we're dealing with here: the use of AI speeds up implementation but bypasses the very process through which constraints were discovered, which in turns limits the product context that it desperately needs to produce good results. It is a chicken or egg problem!

### Squeezing the juice out of the product meeting

In summary, the user research we have conducted thus far uncovered the central tension that underlies the use of coding assistants:

1. Most technical constraints require cross-functional alignment, but communicating them during stakeholder meetings is challenging due to context gap and cognitive load
2. Code generation cannibalizes the implementation phase where additional constraints were previously caught, shifting the burden of discovery to code review — where it's even harder and more expensive to resolve

How to get around this conundrum? The context problem must be addressed at its inception: _during_ product meetings, where there is cross-functional presence and different ideas can be entertained without rework cost. If AI handles the implementation, then the planning phase has to absorb the discovery work that manual implementation used to provide.

This feat will not be easy-we are tackling a uniquely interdisciplinary challenge that touches both the human aspect (generating artifacts that is easily digestible by non-technical team members to drive alignment), as well as the technical aspect of performing counterfactual analysis to surface potential gaps.

Yet we are taking an optimistic bet: we believe that code gen models will keep getting better, and this very development can be bootstrapped upon for the inverse problem of surfacing constraints. Our job is to put the tooling in place so that human developers with their superior ability to creatively problem-solve will always come up on top.

If this mission resonates with you, please feel free to drop by and contribute suggestions or feedback at our [google group](https://groups.google.com/g/bicameral) - we would especially appreciate help in architecting our agent harness!
