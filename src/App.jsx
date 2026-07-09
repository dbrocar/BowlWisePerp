import React, { useState } from "react";
import {
  Menu,
  PawPrint,
  Scale,
  TrendingUp,
  Flame,
  UtensilsCrossed,
  MoonStar,
} from "lucide-react";
import "./App.css";

const summaryCards = [
  { label: "Breed", value: "Pitbull", icon: PawPrint, tone: "green" },
  { label: "Current Weight", value: "60 kg", icon: Scale, tone: "blue" },
  { label: "Target Weight", value: "60 kg", icon: TrendingUp, tone: "amber" },
  { label: "Meals Today", value: "1", icon: Flame, tone: "pink" },
];

const meals = [
  { title: "Dinner", detail: "8 oz chicken", kcal: "0 kcal", icon: MoonStar },
  {
    title: "Breakfast",
    detail: "Balanced meal planned",
    kcal: "640 kcal",
    icon: UtensilsCrossed,
  },
];

const trend = [
  { day: "Mon", val: 59.2 },
  { day: "Tue", val: 59.7 },
  { day: "Wed", val: 60.0 },
  { day: "Thu", val: 60.1 },
  { day: "Fri", val: 60.0 },
];

function Ring() {
  return (
    <div className="ringWrap">
      <div className="ring">
        <div className="ringInner">
          <div className="ringValue">0</div>
          <div className="ringSub">of 2113 kcal</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="appShell">
      <div className="phone">
        <header className="topBar">
          <div className="brand">
            <div className="logo">
              <PawPrint size={26} />
            </div>
            BowlWise
          </div>
          <Menu className="menu" />
        </header>

        <main className="content">
          <section className="hero">
            <div className="date">Wednesday, July 8</div>
            <h1 className="title">M&apos;s Day</h1>
          </section>

          <section className="ringCard panel">
            <Ring />
            <div className="caloriesBlock">
              <div className="caloriesTitle">
                <Flame size={24} color="#1d8f6a" />
                Today&apos;s Calories
              </div>
              <div className="caloriesSub">2113 kcal remaining for today</div>
              <div className="macroRow">
                <div>Protein <b>0/132</b></div>
                <div>Fat <b>0/82</b></div>
                <div>Carbs <b>0/211</b></div>
              </div>
            </div>
          </section>

          <section className="cardGrid">
            {summaryCards.map(({ label, value, icon: Icon, tone }) => (
              <div className="miniCard panel" key={label}>
                <div className={`chip ${tone}`}>
                  <Icon size={30} />
                </div>
                <div className="miniValue">{value}</div>
                <div className="miniLabel">{label}</div>
              </div>
            ))}
          </section>

          <section className="panel sectionCard">
            <div className="sectionHead">
              <h2>Today&apos;s Meals</h2>
              <div className="link">View all</div>
            </div>

            {meals.map((m) => {
              const Icon = m.icon;
              return (
                <div className="mealItem" key={m.title}>
                  <div className="mealLeft">
                    <div className="mealIcon">
                      <Icon size={26} />
                    </div>
                    <div>
                      <div className="mealTitle">{m.title}</div>
                      <div className="mealDetail">{m.detail}</div>
                    </div>
                  </div>
                  <div className="kcal">{m.kcal}</div>
                </div>
              );
            })}
          </section>

          <section className="panel sectionCard">
            <div className="sectionHead">
              <h2>Weight Trend</h2>
              <div className="link">Log weight</div>
            </div>

            <div className="trendBars">
              {trend.map((t, idx) => (
                <div className="barWrap" key={t.day}>
                  <div
                    className="bar"
                    style={{
                      height: `${42 + idx * 14}px`,
                      opacity: 0.25 + idx * 0.15,
                    }}
                  />
                  <div className="barDay">{t.day}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="tabs">
            {["home", "plan", "schedule", "nutrition"].map((k) => (
              <button
                key={k}
                className={`tabBtn ${tab === k ? "active" : ""}`}
                onClick={() => setTab(k)}
              >
                {k[0].toUpperCase() + k.slice(1)}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
