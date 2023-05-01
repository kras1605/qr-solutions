import React from "react"
import Head from "next/head"
import { textTools } from "../../utils/tools";

const siteName = "QR Solutions"

const Seo = (props) => {
    const { title } = props
    const newTitle = `${title} | ${siteName}`

    return (
        <Head>
            <title>{title ? textTools.capitalize(newTitle) : textTools.capitalize(siteName)}</title>
            {title && <meta name="og:title" property="og:title" content={title} />}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="theme-color" content="#dd6b59" />
        </Head>
    );
};

export default Seo;