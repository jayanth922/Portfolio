import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug?: string }> }) {
  const { slug } = await params;
  if (!slug) return new ImageResponse(<div>Project Not Found</div>, { ...size });

  const data = await getProjectBySlug(slug);
  if (!data) return new ImageResponse(<div>Project Not Found</div>, { ...size });

  const { frontmatter } = data;
  const title = frontmatter.title ?? "Project";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 64,
          background: "linear-gradient(135deg,#0b0b0b,#171717)",
          color: "white",
          fontSize: 60,
          lineHeight: 1.1,
          fontWeight: 700,
          fontFamily: "Inter, ui-sans-serif, system-ui",
        }}
      >
        {title}
      </div>
    ),
    { ...size }
  );
}