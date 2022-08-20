import Head from "next/head";

const SEO = ({title}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
        </Head>
    )
}

export default SEO
