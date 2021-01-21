import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost () {
    return <Layout>
            <Head>
                <title>First Post</title>
                {/* <link rel='icon' href="/favicon.ico" /> */}
            </Head>

            <body>
                <h1>First Post</h1>
                <p>This is a first post section, whohoo</p>

                <h2>
                    <Link href="/">
                        <a>Back to the Home page...</a>
                    </Link>
                </h2>
            </body>
        </Layout>
}