import Section from "@/components/section";

export default function AboutPage() {
  return (
    <Section title="About">
      <div className="prose prose-invert max-w-3xl">
        <p>
          I’m a 2nd-year M.S. Software Engineering (Data Science) student at
          San José State University, graduating May 2026. I build practical ML
          systems and thoughtful UIs.
        </p>
        <p>
          Recently, I engineered an image-classification pipeline with strong
          accuracy and robust preprocessing. I enjoy shipping, measuring, and
          iterating with a product mindset.
        </p>
      </div>
    </Section>
  );
}
