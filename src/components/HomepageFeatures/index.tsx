import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    icon: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: '🎯 Automated NPCs',
        icon: '🤖',
        description: (
            <>
                Create intelligent NPCs and advanced game mechanics that
                dynamically respond to player actions and world events.
            </>
        ),
    },
    {
        title: '🎨 Interactive Interfaces',
        icon: '💻',
        description: (
            <>
                Develop custom GUIs and interfaces that provide unique and
                intuitive experiences for players.
            </>
        ),
    },
    {
        title: '🛠️ Custom Systems',
        icon: '⚙️',
        description: (
            <>
                Implement server-specific functionality, from economy systems to
                completely customized PvP mechanics.
            </>
        ),
    },
    {
        title: '📊 Dynamic Content',
        icon: '🔄',
        description: (
            <>
                Create content that evolves and adapts, keeping players always
                engaged with new experiences and challenges.
            </>
        ),
    },
    {
        title: ' Complete Documentation',
        icon: '📖',
        description: (
            <>
                Learn with practical examples, detailed references, and an
                active community always ready to help.
            </>
        ),
    },
];

function Feature({ title, icon, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                    <span className={styles.iconEmoji}>{icon}</span>
                </div>
                <div className={styles.featureContent}>
                    <Heading as="h3" className={styles.featureTitle}>
                        {title}
                    </Heading>
                    <p className={styles.featureDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
}

function QuickStart() {
    return (
        <section className={styles.quickStart}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <div className={styles.quickStartContent}>
                            <Heading as="h2" className={styles.sectionTitle}>
                                🏁 Quick Start
                            </Heading>
                            <p className={styles.sectionDescription}>
                                New to GScript2? No problem! This guide was
                                created for developers of all levels.
                            </p>
                            <div className={styles.quickStartGrid}>
                                <div className={styles.quickStartCard}>
                                    <h4>💬 Need Help?</h4>
                                    <p>
                                        Join our active community of developers
                                    </p>
                                    <a
                                        href="https://discord.gg/graalians"
                                        className="button button--outline button--primary"
                                        target="_blank"
                                    >
                                        Discord Community
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        <div className="col col--12">
                            <div className={styles.featuresHeader}>
                                <Heading
                                    as="h2"
                                    className={styles.sectionTitle}
                                >
                                    🎮 What can you build with GScript2?
                                </Heading>
                                <p className={styles.sectionDescription}>
                                    GScript2 is the native scripting language
                                    for GraalOnline, enabling you to create
                                    immersive gameplay experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <QuickStart />
        </>
    );
}
