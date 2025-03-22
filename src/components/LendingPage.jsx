import React from 'react'
import Footer from './Footer'
import Testimonials from './TestimonialCard'
import DiscussIdeaSection from './DiscussIdeaSection'
import WorkShowcase from './WorkShowcase'
import WhyChooseUs from './WhyChooseUs'
import WeOffer from './WeOffer'
import TrustedCompanies from './TrustedCompanies'
import AttractNewLeads from './AttractNewLeads'
import Header from './Header'

const LendingPage = () => {
    return (
        <>
            <Header />
            <AttractNewLeads />
            <TrustedCompanies />
            <WeOffer />
            <WhyChooseUs />
            <WorkShowcase />
            <Testimonials />
            <DiscussIdeaSection />
            <Footer />
        </>
    )
}

export default LendingPage