import React from 'react'
import Hero from '../components/Hero'
import ImageSection from '../components/ImageSection'
import ProblemSolve from '../components/ProblemSolve'
import FAQ from '../components/FAQ'
import OurPlatform from '../components/OurPlatform'
import Conclusion from '../components/Conclusion'

const Home = () => {
    return (
        <>
            <Hero />
            <ImageSection />
            <ProblemSolve />
            <FAQ />
            <OurPlatform />
            <Conclusion />
        </>
    );
}

export default Home