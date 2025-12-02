"use client";

import LayoutShell from "@/components/LayoutShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FSProjectsPage() {
    return (
        <LayoutShell theme="light">
            <div className="flex w-full flex-col p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {/* Project 1 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>E-Commerce Platform</CardTitle>
                            <CardDescription>A full-featured online store.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4">
                                Built with Next.js, Stripe, and Tailwind CSS. Features include...
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Next.js</Badge>
                                <Badge>TypeScript</Badge>
                                <Badge>Stripe</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Project 2 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>SaaS Dashboard</CardTitle>
                            <CardDescription>Analytics and management tool.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4">
                                Real-time data visualization using Recharts and Supabase.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge>React</Badge>
                                <Badge>Supabase</Badge>
                                <Badge>Recharts</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </LayoutShell>
    );
}
