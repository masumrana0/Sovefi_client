"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { format, subDays, subWeeks, subMonths } from "date-fns";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

// Helper functions to generate date labels
const generateDailyDates = () => {
  return Array.from({ length: 12 }, (_, i) =>
    format(subDays(new Date(), 11 - i), "MMM d"),
  );
};

const generateWeeklyDates = () => {
  return Array.from({ length: 12 }, (_, i) =>
    format(subWeeks(new Date(), 11 - i), "'Week' w"),
  );
};

const generateMonthlyDates = () => {
  return Array.from({ length: 12 }, (_, i) =>
    format(subMonths(new Date(), 11 - i), "MMM yyyy"),
  );
};

const PartnershipOpportunitiesChart: React.FC = () => {
  const dailyData = [
    {
      name: "Daily Opportunities",
      data: [3, 5, 2, 8, 6, 4, 7, 5, 9, 2, 4, 6],
    },
  ];

  const weeklyData = [
    {
      name: "Weekly Opportunities",
      data: [30, 45, 28, 50, 32, 54, 44, 35, 60, 42, 33, 55],
    },
  ];

  const monthlyData = [
    {
      name: "Monthly Opportunities",
      data: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320],
    },
  ];

  const [series, setSeries] = useState(dailyData);
  const [categories, setCategories] = useState(generateDailyDates);

  const handleIntervalChange = (interval: "daily" | "weekly" | "monthly") => {
    if (interval === "daily") {
      setSeries(dailyData);
      setCategories(generateDailyDates());
    } else if (interval === "weekly") {
      setSeries(weeklyData);
      setCategories(generateWeeklyDates());
    } else if (interval === "monthly") {
      setSeries(monthlyData);
      setCategories(generateMonthlyDates());
    }
  };

  return (
    <div className="col-span-12 rounded-sm border bg-white px-5 pb-5 pt-8 shadow-default sm:px-8 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div>
          <h2 className="text-xl font-semibold text-black md:text-nowrap  ">
            Loan Posted
          </h2>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-slate-200 p-1.5">
            <button
              className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-md hover:shadow-lg"
              onClick={() => handleIntervalChange("daily")}
            >
              Day
            </button>
            <button
              className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-lg"
              onClick={() => handleIntervalChange("weekly")}
            >
              Week
            </button>
            <button
              className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-lg"
              onClick={() => handleIntervalChange("monthly")}
            >
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne">
          <ReactApexChart
            options={{ ...options, xaxis: { ...options.xaxis, categories } }}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnershipOpportunitiesChart;
