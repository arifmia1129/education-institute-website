import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "bn",
  fallbackLng: "bn",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        name: "KULAGHAT HIGH SCHOOL",
        wlc: "Welcom To",
        searchText: "Search for...",
        loginBtnTxt: "Login",
        headTeacherMsg:
          "Dear students and parents, welcome to our institution on the website. This way we stay connected and relevant to you Happy and proud to share information, news and other updates stay Our objective is to improve the confidence of students Ensuring proper policy making and educational improvement. each of us The student undertakes to pass a personal qualification and give their education a successful and purposeful perspective. this On the website, you can find out about all the news and events of the organization can",
      },
    },
    bn: {
      translation: {
        name: "কুলাঘাট উচ্চ বিদ্যালয়",
        wlc: "স্বাগতম",
        searchText: "সার্চ করুন",
        loginBtnTxt: "লগইন",
        headTeacherMsg:
          "প্রিয় শিক্ষার্থী ও অভিভাবকবৃন্দ, স্বাগতম আমাদের প্রতিষ্ঠানের ওয়েবসাইটে। এই মাধ্যমে আমরা আপনাদের সাথে যুক্ত থাকতে এবং প্রাসঙ্গিক তথ্য, সংবাদ এবং অন্যান্য আপডেট শেয়ার করতে আনন্দিত এবং গর্বিত হয়ে থাকি। আমাদের উদ্দেশ্য হলো শিক্ষার্থীদের আত্মবিশ্বাস উন্নত করে তাদের সঠিক নীতি নির্ধারণ এবং শিক্ষামূলক উন্নতি নিশ্চিত করা। আমরা প্রতিটি শিক্ষার্থীর একটি ব্যক্তিগত স্বক্ষমতা উত্তরণের প্রতিশ্রুতি দিয়ে থাকি এবং তাদের শিক্ষাকে একটি সফল এবং উদ্দেশ্যবহ পরিপ্রেক্ষিত দিয়ে থাকি। এই ওয়েবসাইটে, আপনারা প্রতিষ্ঠানের সকল সংবাদ এবং ঘটনার সম্পর্কে জানতে পারবেন।",
      },
    },
  },
});

export default i18n;
