import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <div className={styles.heroContent}>
                            <Heading as="h1" className={styles.heroTitle}>
                                {siteConfig.title}
                            </Heading>
                            <p className={styles.heroTagline}>
                                The complete guide that will help you create
                                content across the GraalOnline platform
                            </p>
                            <div className={styles.buttons}>
                                <Link
                                    className="button button--secondary button--lg"
                                    to="/docs/intro"
                                >
                                    🚀 Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className={styles.heroImage}>
                            <img
                                src="/img/gsdev.png"
                                alt="GraalScript2 Development"
                                className={styles.heroLogo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Graal Development Guide - The complete guide that will help you create content across the GraalOnline platform"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
