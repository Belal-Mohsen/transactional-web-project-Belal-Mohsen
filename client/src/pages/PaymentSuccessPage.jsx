import React from 'react';
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import ChatBot from "../components/ChatBot";
import { MdCheckCircle } from 'react-icons/md';

const PaymentSuccessPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <TopBanner />
            <NavBar />
            <Shadow />

            <div className="flex flex-1 items-center justify-center">
                <div className="flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-12 py-6 rounded relative" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}>
                    <MdCheckCircle className="text-green-500 mr-4" size="2.5em" />
                    <strong className="font-bold text-lg">Payment Success</strong>
                </div>
            </div>

            <ChatBot />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default PaymentSuccessPage;
