# Bicameral: Investor Pitch

---

## 1. THE HOOK

**"AI coding tools are solving the wrong problem."**

Everyone's racing to generate more code faster. But the data shows teams using AI aren't actually more productive—and sometimes they're worse off.

We're building the tool that fixes *why* that's happening.

---

## 2. THE PROBLEM

### The Headline Stats

| Stat | Source |
|------|--------|
| 48% of AI-generated code contains security vulnerabilities | Industry security review |
| Teams using AI complete more tasks but overall productivity unchanged or lower | METR/Index.dev studies |
| Empathy gap between eng and business increased 40% → 61% since AI adoption | Atlassian State of Teams |

### Why This Happens

**Developers don't spend most of their time coding.**

- Only 20-25% of time is writing code
- The rest: gathering context, negotiating with product, uncovering edge cases

> *"The act of writing code is the easy part. The hard part is turning an imperfect spec into tickets."*
> — Engineer interview

**AI doesn't do what humans do.**

- Engineers stop and check with product when they hit ambiguity
- AI makes assumptions and generates 1,000 lines you now have to review
- The burden shifts from *writing* code to *reviewing* code you didn't write

### Our Survey Confirms This (n=26 engineers)

| Finding | Data |
|---------|------|
| Discover constraints "during implementation (too late)" | **65%** |
| Top frustration: "Conversations about same issues are repeated" | Verbatim |
| "Product doesn't define what they want. Scope is unclear." | Verbatim |
| "PM not aware of LLM limitations and constraints" | Verbatim |

**The root cause isn't in the code. It's in the meeting.**

---

## 3. THE INSIGHT

### Three Types of Tech Debt

1. **Simple** — Misunderstanding requirements (easy to fix)
2. **Process** — Undefined edge cases (medium)
3. **Architectural** — Premature commitments from missing business context (expensive)

Architectural debt doesn't surface until months later → emergency refactor → weeks of eng time lost.

**This happens because engineers can't surface codebase implications in real-time during product discussions.**

> *"Engineers see all these edge cases that impact timeline. But it's difficult to articulate a full end-to-end flow during a product meeting."*

---

## 4. THE SOLUTION

### Bicameral: Engineering Context for Product Meetings

**What it does:**

1. Captures meeting audio (or ingests transcripts from Fireflies/Otter/Teams)
2. Extracts product decisions being discussed
3. Queries codebase for implications (state machine gaps, data flow impacts, dependency cascades)
4. Surfaces insights the team can act on

**The inversion:**

- Current AI: Requirements → Code (garbage in, garbage out)
- Bicameral: Requirements → "Here's how this impacts your existing system"

> *"We're reversing how we use LLMs. Instead of specifying requirements and getting code, we ask: given this requirement, how would it impact the existing codebase?"*

### Why Team Visibility Matters

| Survey Question | Result |
|-----------------|--------|
| "Team dashboard — visible to whole team automatically" | **54%** preferred |
| "Personal with sharing — I choose what to share" | 31% |

Engineers want the *whole team* to see context, not just themselves. This prevents repeated conversations and gives them leverage.

---

## 5. VALIDATION

### Survey Data (n=26)

| Signal | Finding |
|--------|---------|
| Problem is real | 65% discover constraints too late |
| Adoption path clear | 85% install tools themselves (no IT approval needed) |
| Transcription is mainstream | 65% already use meeting transcription |
| Privacy matters but not absolute | 46% must be local, 38% OK with cloud if not for training |
| Target user has influence | 69% "push back directly — I have standing to influence decisions" |

### HN Feedback (article reached front page)

**Validated:**

- "Code review bottlenecking is a real problem if code production far exceeds review capacity" — zmmmmm
- "AI struggles identifying edge cases from separate processes unless explicitly described" — adithyassekhar
- "AI works best when combined with experience" — micw

**Criticism we address:**

> "Tools already do this" — helloplanets

Our differentiation: Existing tools help *individuals code faster*. We solve *team context sharing*—the upstream problem that causes rework.

---

## 6. COMPETITIVE POSITIONING

### The Market Gap

| Segment | Focus | Gap |
|---------|-------|-----|
| Frontier labs (OpenAI, Anthropic) | Autonomous code generation | Black box, no team context |
| Copilot/Cursor | Individual developer velocity | Doesn't surface implications |
| Meeting tools (Otter, Fireflies) | Transcription + summaries | No codebase integration |

**Bicameral sits at the intersection:** Meeting context × Codebase analysis × Team visibility

### Bootstrapping on Frontier Models

We're not competing with Claude/GPT—we're building *on top* of them.

- They turn prompts → code
- We turn meeting discussions → engineering implications
- Complementary, not competitive

---

## 7. GO-TO-MARKET

### Local-First → Team → Enterprise

| Phase | Strategy | Why |
|-------|----------|-----|
| **MVP** | Individual dev installs, runs locally | 85% adopt tools this way; no IT friction |
| **Expansion** | Dev shares insights, team sees value | 54% want team visibility |
| **Enterprise** | On-prem deployment, security compliance | 46% require local-only; healthcare/finance |

### Target Verticals

- **Healthcare** — Regulatory complexity, high cost of bugs
- **Finance** — Compliance requirements, architectural debt is expensive
- **Web3** — Fast-moving specs, complex state management

---

## 8. THE TEAM

- CTO experience at crypto startup (2 years)
- Led financial infrastructure at health insurance startup
- Trading terminal startup
- Saw product-engineering misalignment across all three

> *"I was both a manager and IC. Managers have no time for the weeds—they want high-level capability assessments. Engineers see edge cases but can't articulate them in meetings. Both parties want alignment but speak different languages."*

---

## 9. TRACTION

| Milestone | Status |
|-----------|--------|
| MVP proving end-to-end flow | Built (3 weeks) |
| User research | 26 survey responses, 10+ interviews |
| Article validation | HN front page, organic inbound interest |
| Waitlist | Building |

---

## 10. THE ASK

**Raising:** Seed round

**Looking for:**

- AI/ML expertise in network (prompt engineering, RAG optimization)
- Connections to engineering leaders at target verticals
- SF network for founder community

---

## 11. WHY NOW

1. **Meeting transcription is mainstream** — 65% already use it; we're not asking for new behavior
2. **AI coding backlash is building** — Teams are feeling the pain; receptive to alternatives
3. **Frontier models are good enough** — We can bootstrap on Claude/GPT without training custom models
4. **The "last 5%" is solvable** — Human-in-the-loop refinement (thumbs up/down, A/B testing) gets us to insights that motivate discussion, not slop

---

## APPENDIX: Key Quotes for Q&A

**On the core problem:**

> "Small decisions have to be made by design/eng based on discovery of product constraints, but communicating this to stakeholders is hard and time consuming. Conversations about the same issues are repeated."
> — Survey respondent

**On AI expectations:**

> "Product managers are not aware of LLM limitations and constraints"
> — Survey respondent

> "Dev are agile, but Product uses Waterfall... creates stress at all levels"
> — Survey respondent

**On what engineers want:**

> "Having context immediately surfaced during meeting would give them leverage and confidence in negotiating feature requests"
> — User interview
