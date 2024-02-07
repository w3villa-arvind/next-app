import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (

        <Html>
            <Preview> Welcome aboard!</Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='font-bold text-3xl'>Hello {name}</Text>
                        <Link href='https://movie-website-omega-one.vercel.app/movieList'>MovieWebSite</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

const body: CSSProperties = {
    background: '#fff'
}
const heading: CSSProperties = {
    fontSize: '32px'
}

export default WelcomeTemplate
