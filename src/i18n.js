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
        headTeacherName: "MD SHAHZAHA ALI",
        headTeacherDesignation: "Head Teacher",
        headTeacherMsg:
          "Dear students and parents, welcome to our institution on the website. This way we stay connected and relevant to you Happy and proud to share information, news and other updates stay Our objective is to improve the confidence of students Ensuring proper policy making and educational improvement. each of us The student undertakes to pass a personal qualification and give their education a successful and purposeful perspective. this On the website, you can find out about all the news and events of the organization can",
        presidentName: "MD HARUN OR RASID",
        presidentDesignation: "President",
        presidentMsg:
          "Dear students, parents, teachers and respected associates, welcome to our institution's website. Education is an invaluable resource that can provide an important part of the lasting impact in a student's life. We are here committed to continuous demonstration of students' journey forward in learning and growth. At our institution, we aim to create a safe and supportive environment for students to increase their confidence and self-reliance with their education. We are capable of categorically improving the thinking, ideals and skills of each student.",
        breakingNews:
          "Dear well wishers, Kulaghat High School website is up and running. The full website will be released soon.",
      },
    },
    bn: {
      translation: {
        name: "কুলাঘাট উচ্চ বিদ্যালয়",
        wlc: "স্বাগতম",
        searchText: "সার্চ করুন",
        loginBtnTxt: "লগইন",
        presidentName: "মোঃ হারুন অর রশিদ",
        presidentDesignation: "সভাপতি",
        presidentMsg:
          "প্রিয় শিক্ষার্থীরা, অভিভাবকরা, শিক্ষক-শিক্ষিকা এবং সম্মানিত সহযোগীগণ, স্বাগতম আপনাদের আমাদের প্রতিষ্ঠানের ওয়েবসাইটে। শিক্ষা একটি অমূল্য সম্পদ যা একজন শিক্ষার্থীর জীবনে স্থায়ী প্রভাব বিষয়ক এক গুরুত্বপূর্ণ অংশ প্রদান করতে সক্ষম। আমরা এখানে শিক্ষার্থীদের শিক্ষার এবং বৃদ্ধির পথে এগিয়ে যাত্রা করার জন্য নিরন্তর প্রদর্শনার জন্য প্রতিশ্রুতিবদ্ধ আছি। আমাদের প্রতিষ্ঠানে, শিক্ষার্থীদের শিক্ষার সাথে তাদের আত্মবিশ্বাস এবং আত্মসমর্থন বাড়ানোর জন্য একটি সুরক্ষিত এবং সহায়ক পরিবেশ সৃষ্টি করাই আমাদের লক্ষ্য। আমরা প্রতিটি শিক্ষার্থীর ভাবনা, আদর্শ এবং দক্ষতা শ্রেণীবদ্ধ ভাবে উন্নত করতে সমর্থ।",
        headTeacherName: "মোঃ শাহজাহান আলী",
        headTeacherDesignation: "প্রধান শিক্ষক",
        headTeacherMsg:
          "প্রিয় শিক্ষার্থী ও অভিভাবকবৃন্দ, স্বাগতম আমাদের প্রতিষ্ঠানের ওয়েবসাইটে। এই মাধ্যমে আমরা আপনাদের সাথে যুক্ত থাকতে এবং প্রাসঙ্গিক তথ্য, সংবাদ এবং অন্যান্য আপডেট শেয়ার করতে আনন্দিত এবং গর্বিত হয়ে থাকি। আমাদের উদ্দেশ্য হলো শিক্ষার্থীদের আত্মবিশ্বাস উন্নত করে তাদের সঠিক নীতি নির্ধারণ এবং শিক্ষামূলক উন্নতি নিশ্চিত করা। আমরা প্রতিটি শিক্ষার্থীর একটি ব্যক্তিগত স্বক্ষমতা উত্তরণের প্রতিশ্রুতি দিয়ে থাকি এবং তাদের শিক্ষাকে একটি সফল এবং উদ্দেশ্যবহ পরিপ্রেক্ষিত দিয়ে থাকি। এই ওয়েবসাইটে, আপনারা প্রতিষ্ঠানের সকল সংবাদ এবং ঘটনার সম্পর্কে জানতে পারবেন।",
        breakingNews:
          "প্রিয় শুভানুধ্যায়ী, কুলাঘাট উচ্চ বিদ্যালয়ের ওয়েবসাইট চলছে। সম্পূর্ণ ওয়েবসাইটটি শীঘ্রই প্রকাশ করা হবে।",
      },
    },
  },
});

export default i18n;
