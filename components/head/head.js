/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import NextHead from 'next/head'


export default function head({title}) {
    return (
        <>
            <NextHead>
                            
                <meta name="keywords" content="victor kiss, space, space news, nasa api"/>

                <meta name="author" content="Victor Kiss"/>

                <meta name="description" content="Get the most up-to-date space data directly from NASA."/>

                <meta charSet="UTF-8"/>

                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                
                <meta httpEquiv="Content-Language" content="en"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>

                <link rel="icon" type="image/png" href="/icon.png"/>

                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                <title>{title}</title>
            </NextHead>
        </>
    )
}
