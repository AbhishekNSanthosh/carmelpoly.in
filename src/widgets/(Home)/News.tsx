import React from "react";

export default function News() {
  const newsItems = [
    "🚀 Hackathon 2024 is live! Participate and win exciting prizes!",
    "🎉 Congratulations to the winners of the Tech Quiz!",
    "📢 Attend Ease 2.0 is launching next week!"
  ];

  return (
    <div className="w-full bg-primary-100 h-[5vh] px-[5vw] flex items-center space-x-3 overflow-hidden">
      <div className="font-medium whitespace-nowrap">
        <span>Latest News:</span>
      </div>
      <div className="marquee-container overflow-hidden flex-1">
        <div className="marquee-content flex items-center space-x-10">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              {newsItems.map((item, idx) => (
                <span 
                  key={`${i}-${idx}`}
                  className="text-sm text-primary-800 whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}