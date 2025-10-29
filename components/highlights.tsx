import Section from "./section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Brain, Boxes, Sparkles } from "lucide-react";

export default function Highlights() {
  return (
    <Section id="highlights" eyebrow="Snapshot" title="Highlights for recruiters">
      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <BarChart3 className="size-5" />
            <CardTitle>Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Deployed image-classification pipeline with up to <strong>97% test accuracy</strong>.</li>
              <li>Improved data preprocessing quality to **90%+** input standardization.</li>
              <li>Benchmarked models with accuracy, precision, recall, F1; selected best configs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Brain className="size-5" />
            <CardTitle>ML / Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>PyTorch</Badge>
              <Badge>TensorFlow</Badge>
              <Badge>Scikit-learn</Badge>
              <Badge>Pandas</Badge>
              <Badge>OpenCV</Badge>
              <Badge>MDX</Badge>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Zernike moments, statistical descriptors, feature engineering.</li>
              <li>Training, validation, hyperparameter tuning.</li>
              <li>Evaluation + reporting for stakeholders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Boxes className="size-5" />
            <CardTitle>Systems / Web</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind</Badge>
              <Badge>shadcn/ui</Badge>
              <Badge>Vercel</Badge>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Server Actions, API routes, image optimization.</li>
              <li>Accessibility-first, responsive UI, Core Web Vitals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Sparkles className="size-5" />
            <CardTitle>What I bring</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Clear case studies with problem → approach → result.</li>
              <li>Strong collaboration & communication.</li>
              <li>Ownership mindset; ship fast, measure, iterate.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
