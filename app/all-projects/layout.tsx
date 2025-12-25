
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Projects',
    description: 'Explore all projects built by Shivansh Pawar. A collection of web applications, experiments, and open source contributions.',
    openGraph: {
        title: 'All Projects | Shivansh Pawar',
        description: 'Explore all projects built by Shivansh Pawar. A collection of web applications, experiments, and open source contributions.',
    },
};

export default function AllProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
