"use client";

import LayoutShell from "@/components/LayoutShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIProjectsPage() {
    return (
        <LayoutShell theme="dark">
            <div className="flex w-full flex-col p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-white">AI Projects</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {/* Project 1 */}
                    <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                            <CardTitle>LLM Chatbot</CardTitle>
                            <CardDescription className="text-gray-400">Context-aware conversational agent.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-300 mb-4">
                                Fine-tuned Llama 2 model for specific domain knowledge.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Python</Badge>
                                <Badge variant="secondary">PyTorch</Badge>
                                <Badge variant="secondary">Hugging Face</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Project 2 */}
                    <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                            <CardTitle>Image Classifier</CardTitle>
                            <CardDescription className="text-gray-400">Medical imaging diagnosis tool.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-300 mb-4">
                                CNN architecture achieving 98% accuracy on test set.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">TensorFlow</Badge>
                                <Badge variant="secondary">Keras</Badge>
                                <Badge variant="secondary">OpenCV</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </LayoutShell>
    );
}
