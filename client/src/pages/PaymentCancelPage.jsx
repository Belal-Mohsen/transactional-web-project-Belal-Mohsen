import React from 'react';
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import ChatBot from "../components/ChatBot";
import { MdCancel } from 'react-icons/md';

const PaymentCancelPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <TopBanner />
            <NavBar />
            <Shadow />

            <div className="flex flex-1 items-center justify-center">
                <div className="flex items-center justify-center bg-red-100 border border-red-400 text-red-700 px-12 py-6 rounded relative" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}>
                    <MdCancel className="text-red-500 mr-4" size="2.5em" />
                    <strong className="font-bold text-lg">Payment Canceled</strong>
                </div>
            </div>

            <ChatBot />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default PaymentCancelPage;
