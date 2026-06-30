import type { SpecializationPack } from "@/data/site";
import { Reveal } from "@/components/site/reveal";

type SpecializationCardProps = {
  pack: SpecializationPack;
};

export function SpecializationCard({ pack }: SpecializationCardProps) {
  return (
    <Reveal className="rounded-[26px] border border-border bg-surface-faint p-5">
      <h3 className="text-xl font-semibold text-foreground">{pack.name}</h3>
      <p className="mt-2 text-sm text-muted">{pack.focus}</p>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
          Useful tools
        </p>
        <p className="mt-2 text-sm text-foreground/90">{pack.tools.join(", ")}</p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
          AI workflows
        </p>
        <ul className="mt-2 grid gap-2">
          {pack.workflows.map((workflow) => (
            <li key={workflow} className="text-sm text-muted">
              {workflow}
            </li>
          ))}
        </ul>
      </div>

      {pack.targetRoles?.length ? (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Target roles
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {pack.targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border bg-surface-chip px-3 py-1 text-xs text-foreground/90"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {pack.coreSkills?.length ? (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Core skills
          </p>
          <ul className="mt-2 grid gap-2">
            {pack.coreSkills.map((skill) => (
              <li key={skill} className="text-sm text-muted">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {pack.portfolioIdeas?.length ? (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Portfolio ideas
          </p>
          <ul className="mt-2 grid gap-2">
            {pack.portfolioIdeas.map((idea) => (
              <li key={idea} className="text-sm text-muted">
                {idea}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {pack.resumeKeywords?.length ? (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Resume keywords
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {pack.resumeKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-border bg-surface-chip px-3 py-1 text-xs text-foreground/90"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {pack.interviewThemes?.length ? (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Interview themes
          </p>
          <ul className="mt-2 grid gap-2">
            {pack.interviewThemes.map((theme) => (
              <li key={theme} className="text-sm text-muted">
                {theme}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {pack.learningPlan?.length ? (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            30-day plan
          </p>
          <ul className="mt-2 grid gap-2">
            {pack.learningPlan.map((step) => (
              <li key={step} className="text-sm text-muted">
                {step}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {pack.commonMistakes?.length ? (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Common mistakes
          </p>
          <ul className="mt-2 grid gap-2">
            {pack.commonMistakes.map((mistake) => (
              <li key={mistake} className="text-sm text-muted">
                {mistake}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 rounded-2xl border border-border/70 bg-surface-chip p-4">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
          Career advice
        </p>
        <p className="mt-2 text-sm text-foreground/90">{pack.careerAdvice}</p>
      </div>
    </Reveal>
  );
}
