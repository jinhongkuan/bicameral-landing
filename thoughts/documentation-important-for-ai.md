# Documentation is Important for AI Use

Collection of external perspectives on how documentation enables effective AI adoption.

---

## Reddit: "AI is working great for my team and y'all are..."

**Source:** https://www.reddit.com/r/ExperiencedDevs/comments/1qq8y8u/ai_is_working_great_for_my_team_and_yall_are/

**Subreddit:** r/ExperiencedDevs

**Date Added:** 2025-01-29

### Context

OP (an EM) describes their team's successful AI adoption with Claude Code, including shared skills, documentation generation, meeting note integration, and ticket generation. Claims they're getting "upper mid-level engineer" quality output in one shot.

---

### Critical Voices

#### Mental Model / Learning Concerns

> "The one thing I would point out is you might be undervaluing the conceptual mental model a human builds when working through the process of writing software and making mistakes." — u/2053_Traveler

> "A system built entirely of 'well, it works!' code doesn't age well." — comment

> "I dont think its possible to undervalue the mental model. The mental model IS why you spend the work on something." — u/Jmc_da_boss

#### Complexity & Context Gaps

> "I think it depends greatly on what you're building and how stock it is. For my freelance clients AI is great. This is because it's all very standard php CRUD pages... My day job is not that. It's complicated. It's got global state. There's like fifteen different micro services. You have to know the whole system in order to understand what's going on. Our front ends don't use bootstrap, they use an entirely custom UI library, which the LLM is clueless about, so of course it can't write it." — u/RGBrewskies

> "How large is your codebase and how many custom libraries/extensions do you have? For myself I have struggled to make AI useful, though I work on a very large service at a FAANG that is probably several million lines of code." — u/Life-Principle-3771

#### Requirements & Edge Cases

> "A developers' job is to reduce ambiguity. We take the business need and outline its logic precisely so a machine can execute. The act of writing the code is the easy part. Odds are, you aren't creating perfect code specs into tickets, even with meeting notes, because developers will encounter edge cases that demand clarification over the course of implementation... LLMs are sycophants. They won't be watching, skeptically, for what are excluded in coded conditionals and api calls." — u/Mumbly_Bum

> "It's not just the hard stuff it can't do. Sometimes it can't do the easy stuff that it doesn't know it should do. Caching is the best example: if you don't explicitly tell it to cache something, it won't... AI code is only as good as the requirements you give it, and if you can't think of all of your requirements up front, it'll never generate the code you want." — u/DizzyAmphibian309

#### Skepticism About Productivity Claims

> "Almost nothing you describe in your post is actually a cost benefit that we can analyze or disagree with. You just throw out a bunch of workflows you seem to personally believe are good... You seem to have a highly motivated team that is willing to engage with this tech wholeheartedly and a leadership environment that is giving you unrestricted access to all of the AI resources you require. And yet at the end of the day it's only giving you modest productivity gains." — u/hoopaholik91

> "Plenty of people saying it changed their worklife, meanwhile not a single KPI changed. Worse, most of the AI hyped people are so motivated. Like you can see how much more work they're putting in, and it still stays even." — u/21epitaph

> "Most teams aren't well ran and functional. A few days ago I got out of an all-hands where one of our leaders was trying to convince us to go all in on AI for coding, design, planning, and everything because it'll 10x our velocity. Literally said that - '10x our velocity'. As the meeting went on it became uncomfortably clear that they're pushing AI in hopes it'll manage to compensate for not having a defined product strategy." — comment

#### Code Quality Reality Check

> "I actually went through an exercise this week... I directed for about 6 hours and eventually we had a working end to end system... I created a draft PR and then decided to try rewrite the same feature by hand. It took me roughly the same time (actually a little bit less). What I thought was 'decent AI' code was absolute slop. It was creating custom types everywhere rather than reusing them. It had missed endless error checks... Prompting does not build the same model and you're relying on AI to try do everything for you: it's not going to happen." — u/scoopydidit

> "I cant help but feel almost always when someone praises AI its always something like, we produce 100x more code but never we produce more code, have less bugs OR spend less time fixing the bugs we have." — u/AttemptNo499

#### The Counter-Argument (Documentation Enables Success)

> "I work on a massive distributed cloud database - complicated, thousands of engineers in monolith Java, millions of lines of codes. Since many teams started to write their AI context documentation navigating this codebase starts to be manageable - normally it would be an hour of research to figure out how something that other team does is implemented. Now AI 'just knows'... IMO large and complex code bases, those that are above capacity of a single human brain are where AI shines." — u/scodagama1

#### Junior Developer Concerns

> "I really worry that juniors (if they exist), using AI heavily is just depriving them of practice opportunities." — u/Yourdataisunclean

> "We're currently hiring for a senior role. Thanks to AI, it's much harder to judge skill based on our take-home technical assessment. Now we can only get a sense of their actual skill level when they come in to discuss the technical, wasting so much more time in hiring." — u/techie2200

---

### Key Takeaways

1. **Success correlates with existing documentation** - OP's team success came after "building documentation on our stack/codebase/architecture"
2. **Complexity is the bottleneck** - Standard CRUD works; custom systems with global state don't
3. **Mental models matter** - The act of writing code builds understanding that reviewing AI output doesn't replicate
4. **Edge cases surface during implementation** - AI can't ask clarifying questions the way humans do
5. **Productivity gains are modest** - Even enthusiasts report "half the time" at best, not 10x

---
