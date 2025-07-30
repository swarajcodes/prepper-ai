import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuSparkles, LuBrain } from "react-icons/lu";

import HERO_IMG from "../assets/hero_img.png";
import { APP_FEATURES } from "../utils/data";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Modal from "../components/Modal";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <>
      {/* The 'grid-background' class has been added here */}
      <div className="w-full min-h-screen bg-[#FFFCEF] relative overflow-hidden grid-background">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-orange-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-30"></div>
        </div>

        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-20 relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF9324] to-[#e99a4b] rounded-xl flex items-center justify-center shadow-lg">
                <LuBrain className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl text-black font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9324] to-[#e99a4b]">
                  Prepper
                </span>
                -AI
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button
                className="border border-amber-300 text-sm font-medium text-black px-6 py-2 rounded-lg hover:bg-amber-100 transition-colors"
                onClick={() => setOpenAuthModal(true)}
              >
                Login
              </button>
              <button
                className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
                onClick={() => {
                  setCurrentPage("signup");
                  setOpenAuthModal(true);
                }}
              >
                Start for free
              </button>
            </div>
          </header>

          {/* Hero Content */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs text-amber-600 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 mb-6">
              <LuSparkles className="w-3 h-3" />
              NEW Introducing AI-Powered Learning
            </div>

            <h1 className="text-6xl md:text-7xl text-black font-bold mb-6 leading-tight">
              Ace Interviews with <br />
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                AI-Powered
              </span>{" "}
              Learning
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Get role-specific questions, expand answers when you need them,
              dive deeper into concepts, and organize everything your way. From
              preparation to mastery - your ultimate interview toolkit is here.
            </p>
            <button
              className="bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg border border-amber-300 hover:bg-amber-100 hover:text-black transition-colors"
              onClick={handleCTA}
            >
              Start your interview prep
            </button>
          </div>
        </div>

        {/* Floating Card Section */}
        <div className="w-full relative z-10 -mt-20">
          <div className="container mx-auto px-4">
            <div className="bg-[#FFFEF8]/90 backdrop-blur-sm rounded-2xl border border-amber-200 p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
              {/* Video Player */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden bg-amber-50">
                  <img
                    src={HERO_IMG}
                    alt="Prepper-AI Demo"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <div className="w-0 h-0 border-l-[16px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 text-gray-600 text-sm">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-amber-500 rounded"></div>
                  </div>
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-amber-500 rounded"></div>
                  </div>
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-amber-500 rounded"></div>
                  </div>
                  <span>This is Prepper-AI 0:37</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full bg-transparent mt-20">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-black text-center mb-16">
              Features that make you shine
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {APP_FEATURES.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-200 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-[#FF9324] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {APP_FEATURES.slice(3).map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-200 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-[#FF9324] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-50 text-gray-600 py-8">
          Made with 💙 by Swaraj
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
