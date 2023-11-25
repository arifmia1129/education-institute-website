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
        logoutBtnTxt: "Logout",
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
        latest: "Latest",
        firstPage: "Home",
        administrationInfo: "Administration",
        managingCommittee: "Management",
        teachersInfo: "Teachers",
        employeesInfo: "Employees",
        totalEmployees: "Teachers/Staff",
        instituteInfo: "Institute",
        history: "History",
        mpoInfo: "MPO",
        landInfo: "Land",
        landOwnerInfo: "Land Owner",
        teachersPresentInfo: "Teachers' Attendance",
        employeesPresentInfo: "Employees' Attendance",
        successStories: "Success Stories",
        buildingInfo: "Building",
        laboratoryInfo: "Laboratory",
        fieldInfo: "Field",
        computerLab: "Computer Lab",
        multimediaClass: "Multimedia Class Room",
        extraCurriculumInfo: "Extra-Curricular Activities",
        cleanExercisesInfo: "Cleanliness, Health, and Sanitation",
        teachingInfo: "Teaching",
        oathInfo: "Oath Information",
        classRoutinesInfo: "Class Routines Info",
        classInfo: "Classrooms Info",
        feeInfo: "Fee Payment Info",
        curriculumInfo: "Curriculum Info",
        seatInfo: "Number of Seats",
        bookListInfo: "Book List Info",
        uniformInfo: "Uniform Info",
        ruleInfo: "Code of Conduct Info",
        coCurriculumInfo: "Co-Curricular",
        scoutInfo: "Scout Info",
        scienceClub: "Science Club",
        cultureClub: "Cultural Club",
        educationClub: "Education Club",
        playingsClub: "Sports Club",
        ICTClub: "ICT Club",
        otherActivity: "Other Activities",
        studentInfo: "Student",
        searchStudentId: "Search Student ID",
        studentInfoByClass: "Student Information by Class",
        stipenerInfo: "Scholarship Recipients Information",
        talentStudentInfo: "Talented Student Information",
        presentStudentByClass: "Present Students by Class",
        pastTalentStudentInfo: "Former Talented Students Information",
        admissionInfo: "Admission",
        admissionApplications: "Admission Applications - 2024",
        examInfo: "Exam",
        examResults: "Exam Results (Search by ID)",
        passedStudent: "Passed Students Information",
        failedStudent: "Failed Students Information",
        onlineApplication: "Application",
        studentLeaveApplication: "Leave Application (Student)",
        teacherLeaveApplication: "Leave Application (Teacher)",
        certificationApplication: "Certification Application",
        recommendationApplication: "Recommendation Letter Application",
        notice: "Notice",
        photoGallery: "Photo Gallery",
        contactInfo: "Contact",
        eSchool: "E-School",
        addSchoolHistory: "Add School History",
        teacherList: "All Teaher List",
        addTeacherBtn: "Add Teacher",
        employeeInfo: "Employee Information",
      },
    },
    bn: {
      translation: {
        name: "কুলাঘাট উচ্চ বিদ্যালয়",
        wlc: "স্বাগতম",
        searchText: "সার্চ করুন",
        loginBtnTxt: "লগইন",
        logoutBtnTxt: "লগ আউট",
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
        latest: "সর্বশেষ",
        // menu items
        firstPage: "প্রথম পাতা",
        administrationInfo: "প্রশাসনিক তথ্য",
        managingCommittee: "ব্যবস্থাপনা কমিটি",
        teachersInfo: "শিক্ষকদের তথ্য",
        employeesInfo: "কর্মচারীদের তথ্য",
        totalEmployees: "অনুমোদিত এবং পূরণকৃত শিক্ষক/কর্মচারীর পদের সংখ্যা",
        instituteInfo: "প্রাতিষ্ঠানিক তথ্য",
        history: "ইতিহাস ও পরিচিতি",
        mpoInfo: "এমপি ও জাতীয়করণের তথ্য",
        landInfo: "ভূমির তপসিল",
        landOwnerInfo: "ভূমি মালিকানা সংক্রান্ত তথ্য",
        teachersPresentInfo: "শিক্ষক উপস্থিতি",
        employeesPresentInfo: "কর্মচারী উপস্থিতি",
        successStories: "সফলতার গল্প",
        buildingInfo: "ভবনের তথ্য",
        laboratoryInfo: "গবেষণাগার",
        fieldInfo: "খেলার মাঠ",
        computerLab: "কম্পিউটার ল্যাব",
        multimediaClass: "মাল্টিমিডিয়া ক্লাস রুম",
        extraCurriculumInfo: "ক্রীড়া ও সাংস্কৃতিক কার্যক্রম",
        cleanExercisesInfo: "পরিচ্ছন্নতা, শরীরচর্চা এবং স্যানিটেশন",
        teachingInfo: "পাঠদান ও স্বীকৃতি প্রদান সংক্রান্ত তথ্য",
        oathInfo: "শপথ বাক্য",
        classRoutinesInfo: "ক্লাস রুটিন",
        classInfo: "শ্রেণি কক্ষ",
        feeInfo: "ফি প্রদান",
        curriculumInfo: "পাঠ্যসূচি",
        seatInfo: "আসন সংখ্যা",
        bookListInfo: "বই এর তালিকা",
        uniformInfo: "ইউনিফর্ম",
        ruleInfo: "আচরণ বিধি",
        coCurriculumInfo: "সহপাঠ কার্যক্রম",
        scoutInfo: "স্কাউট",
        scienceClub: "বিজ্ঞান ক্লাব",
        cultureClub: "সাংস্কৃতিক ক্লাব",
        educationClub: "শিক্ষা ক্লাব",
        playingsClub: "খেলাধুলা ক্লাব",
        ICTClub: "আইসিটি ক্লাব",
        otherActivity: "অন্যান্য কার্যক্রম",
        studentInfo: "ছাত্র ছাত্রীদের তথ্য",
        searchStudentId: "শিক্ষার্থী আইডি অনুসন্ধান",
        studentInfoByClass: "ক্লাস ভিত্তিক শিক্ষার্থীদের তথ্য",
        stipenerInfo: "উপবৃত্তি প্রাপ্ত শিক্ষার্থীদের তথ্য",
        talentStudentInfo: "মেধাবী শিক্ষার্থীদের তথ্য",
        presentStudentByClass: "ক্লাস ভিত্তিক শিক্ষার্থীর উপস্থিতি",
        pastTalentStudentInfo: "প্রাক্তন মেধাবী শিক্ষার্থীদের তথ্য",
        admissionInfo: "ভর্তি সংক্রান্ত তথ্য",
        admissionApplications: "ভর্তি আবেদন - ২০২৪",
        examInfo: "পরীক্ষা সম্পর্কিত তথ্য",
        examResults: "পরীক্ষা ফলাফল (আইডি অনুসন্ধান দিয়ে রেজাল্ট)",
        passedStudent: "পাশকৃত শিক্ষার্থীদের তথ্য",
        failedStudent: "অকৃতকার্য শিক্ষার্থীদের তথ্য",
        onlineApplication: "অনলাইন আবেদন",
        studentLeaveApplication: "ছুটির জন্য আবেদন (ছাত্র/ছাত্রী)",
        teacherLeaveApplication: "ছুটির জন্য আবেদন (শিক্ষক)",
        certificationApplication: "প্রত্যয়নের জন্য আবেদন",
        recommendationApplication: "প্রসংশা পত্রের জন্য আবেদন",
        notice: "নোটিশ",
        photoGallery: "ফটো গ্যালারি",
        contactInfo: "যোগাযোগ",
        eSchool: "ই-স্কুল",
        addSchoolHistory: "স্কুলের ইতিহাস যুক্ত করুন",
        teacherList: "শিক্ষক শিক্ষিকা তালিকা",
        addTeacherBtn: "শিক্ষক যুক্ত করুন",
        employeeInfo: "কর্মচারীদের তথ্য",
      },
    },
  },
});

export default i18n;
