export function Hero() {
  return (
    <section className="bg-[var(--color-background)] text-[var(--color-text)]">
      <h1 className="text-5xl font-bold">
        Building
        <span className="text-[var(--color-primary-500)]">
          {" "}
          digital systems.
        </span>
      </h1>

      <p className="mt-4 text-[var(--color-text-muted)]">
        Full-stack developer focused on creating useful and reliable software.
      </p>

      <button
        className="
          mt-6
          rounded-lg
          bg-[var(--color-primary-500)]
          px-6
          py-3
          font-medium
          text-black
          transition
          hover:bg-[var(--color-accent)]
        "
      >
        View Projects
      </button>
    </section>
  );
}