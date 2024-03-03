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
            <div className="container mx-auto px-4 pb-4">
            <ImageSection />
            <ProblemSolve />
            <FAQ />
            <OurPlatform />
            <Conclusion />
            </div>
        </>
    );
}

export default Home