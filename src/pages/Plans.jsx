import confetti from "canvas-confetti";
import { Check } from "lucide-react";
import React, { useState } from "react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    features: ["Basic analytics", "1 chart", "Limited data"],
  },
  {
    name: "Pro",
    monthly: 15,
    features: ["All analytics", "Unlimited charts", "Export data"],
  },
  {
    name: "Enterprise",
    monthly: 39,
    features: ["Everything", "Team access", "Priority support"],
  },
];

export default function Plans() {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPaying, setIsPaying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFakePayment = (plan) => {
    setSelectedPlan(plan);
    setIsPaying(true);
    setIsSuccess(false);
    setProgress(0);

    let value = 0;

    const interval = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setIsPaying(false);
        setIsSuccess(true);
      }
    }, 40);
  };

  const getPrice = (monthlyPrice) => {
    if (billing === "monthly") return monthlyPrice;
    return Math.round(monthlyPrice * 12 * 0.8);
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0000FF"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 50, 
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#0000FF"],
      })
    }, 150)
  }
  return (
    <div className="">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Plan & Pricing
        </h1>
        <p className="max-w-[700px] text-gray-500">
          Choose the plan that fits your needs. All plans include essential
          features to get you started, with options to scale as you grow. No
          hidden fees and the flexibility to change anytime.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="inline-flex relative bg-blue-100 rounded-2xl p-1 px-3">
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-2xl bg-blue-600 transition-all duration-200 ${billing === "monthly" ? "left-1" : "left-[108px]"}`}
            />
            <button
              onClick={() => setBilling("monthly")}
              className={`cursor-pointer relative z-10 px-6 py-2 rounded-2xl font-semibold transition-colors ${billing === "monthly" ? "text-white" : "text-blue-700"}`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`cursor-pointer relative z-10 px-6 py-2 rounded-lg font-semibold transition-colors ${
                billing === "yearly" ? "text-white" : "text-blue-700"
              }`}
            >
              Yearly
            </button>
          </div>
          <p className="text-blue-700 text-sm">-20% off on annual payments</p>
        </div>

        <div className="flex gap-6">
          {plans.map((plan) => (
            <div
              className="flex-1 bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition w-[200px]"
              key={plan.name}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h2>

              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${getPrice(plan.monthly)}
                </span>

                <span className="text-gray-500">
                  /{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100">
                      <Check size={14} className="text-blue-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-2xl font-semibold bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition cursor-pointer"
                onClick={() => handleFakePayment(plan)}
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {(isPaying || isSuccess) && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[320px] text-center">
            {isPaying && (
              <>
                <div className="mb-4 text-blue-600 text-lg font-semibold">
                  Processing payment
                </div>

                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-3 text-sm text-gray-500">{progress}%</p>
              </>
            )}

            {isSuccess && (
              <>
                <h2 className="text-xl font-bold mb-2">Payment successful</h2>
                <p className="text-gray-500 mb-6">
                  You selected <b>{selectedPlan?.name}</b> plan
                </p>
                <button
                  onClick={() => {
                    fireConfetti()
                    setIsSuccess(false)
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  Continue
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
