import PriceCard from "@/components/priceCard/PriceCard";
import React from "react";

const pricingPlans = [
  {
    label: "Free",
    price: "$0,00",
    description: "Great for trying out Finament and for tiny teams",
    features: [
      "Account Aggregation",
      "Basic Analytics",
      "Limited Support",
      "Community Access",
      "1 User Account"
    ]
  },
  {
    label: "Professional",
    price: "$98,00",
    description: "Best for growing startups and growth companies",
    features: [
      "Account Aggregation",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
      "5 User Accounts"
    ]
  },
  {
    label: "Enterprise",
    price: "$160,00",
    description: "Best for large companies and teams requiring security",
    features: [
      "Account Aggregation",
      "Full Analytics Suite",
      "Dedicated Support",
      "Enterprise Integrations",
      "Unlimited User Accounts"
    ]
  }
];

function Page() {
  return (
    <div className="mt-24 md:mt-32">
      <div className="text-center text-slate-200 leading-loose">
        <h1 className="text-2xl md:text-5xl font-semiboldbold">
          Simple and Affordable <br />
          Pricing Plans
        </h1>
        <p className="text-xs mt-4 mx-20 md:mx-0 text-slate-400">
          Start tracing and improving your finance management
        </p>
      </div>
      <div className="my-4 md:my-10 flex flex-col md:flex-row justify-center items-center">
        {pricingPlans.map((plan, index) => (
          <PriceCard
            key={index}
            label={plan.label}
            price={plan.price}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
