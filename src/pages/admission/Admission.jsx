import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import divisions from "../../data/division.json";
import district from "../../data/district.json";
import upazila from "../../data/upazila.json";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";
import generateUniqueId from "../../utils/generateUniqueId";
import CountDown from "../../ui/shared/CountDown";

export default function Admission() {
  const [presentAddressDistricts, setPresentAddressDistricts] = useState([]);
  const [presentAddressUpazilas, setPresentAddressUpazilas] = useState([]);
  const [permanentAddressDistricts, setPermanentAddressDistricts] = useState(
    []
  );
  const [permanentAddressUpazilas, setPermanentAddressUpazilas] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [admissionInfo, setAdmissionInfo] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const selectedPresentAddressDivision = watch("presentAddress.division");
  const selectedPresentAddressDistrict = watch("presentAddress.district");
  const selectedPermanentAddressDivision = watch("permanentAddress.division");
  const selectedPermanentAddressDistrict = watch("permanentAddress.district");
  const imageUrl = watch("imageUrl");

  useEffect(() => {
    if (imageUrl) {
      const file = imageUrl[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }, [imageUrl]);

  useEffect(() => {
    const districts = district.filter(
      (dis) => dis.division_id === selectedPresentAddressDivision
    );
    setPresentAddressDistricts(districts);

    const upazilas = upazila.filter(
      (upa) => upa.district_id === selectedPresentAddressDistrict
    );
    setPresentAddressUpazilas(upazilas);
  }, [selectedPresentAddressDivision, selectedPresentAddressDistrict]);

  useEffect(() => {
    const districts = district.filter(
      (dis) => dis.division_id === selectedPermanentAddressDivision
    );
    setPermanentAddressDistricts(districts);

    const upazilas = upazila.filter(
      (upa) => upa.district_id === selectedPermanentAddressDistrict
    );
    setPermanentAddressUpazilas(upazilas);
  }, [selectedPermanentAddressDivision, selectedPermanentAddressDistrict]);

  const onSubmit = async (data) => {
    data.imageUrl = selectedImage;

    setAdmissionInfo(data);
    reset();
  };

  const getDivisionName = (id) => {
    const divisionInfo = divisions.find((div) => div.id === id);
    return divisionInfo.name;
  };

  const getDistrictName = (id) => {
    const districtInfo = district.find((dis) => dis.id === id);
    return districtInfo.name;
  };

  const getUpazilaName = (id) => {
    const upazilaInfo = upazila.find((upa) => upa.id === id);
    return upazilaInfo.name;
  };

  const handlePrintDocument = () => {
    const pdfWidth = 210; // A4 width in millimeters
    const pdfHeight = 297; // A4 height in millimeters

    // Set the dimensions of the applicationPage div to A4 size
    const applicationPage = document.getElementById("applicationPage");
    applicationPage.style.width = `${pdfWidth}mm`;
    applicationPage.style.height = `${pdfHeight}mm`;

    htmlToImage
      .toPng(applicationPage, { quality: 1.0 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";

        const pdf = new jsPDF({
          unit: "mm",
          format: [pdfWidth, pdfHeight], // Set A4 size
        });

        const imgProps = pdf.getImageProperties(dataUrl);
        const aspectRatio = imgProps.width / imgProps.height;

        // Calculate the height based on the aspect ratio to maintain proportions
        const imgWidth = pdfWidth;
        const imgHeight = imgWidth / aspectRatio;

        pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("application.pdf");

        // Reset the dimensions of the applicationPage div after capturing the image
        applicationPage.style.width = "";
        applicationPage.style.height = "";

        // Reset the selectedImage state to null
        // setSelectedImage(null);
      });
  };

  return (
    <>
      {!admissionInfo ? (
        <div className="lg:max-w-7xl mx-auto my-10 text-[#3D4E5E]">
          <h1 className="text-3xl font-bold text-center text-primary">
            ভর্তি আবেদন-২০২৩
          </h1>
          <div>
            <CountDown monthDay="12-31" />
          </div>
          <p className="font-bold text-lg">
            <span className="text-red-500 font-bold">*</span> সমস্ত তথ্য অবশ্যই
            <span className="text-red-500"> ইংরেজিতে </span> পূরণ করতে হবে।
          </p>
          <p className="font-bold text-lg">
            <span className="text-red-500 font-bold">*</span> লাল তারকা (
            <span className="text-red-500 font-bold">*</span>) চিহ্ণিত তথ্যগুলো
            অবশ্যই প্রদান করতে হবে।
          </p>
          <p className="font-bold text-lg">
            <span className="text-red-500 font-bold">*</span> ইচ্ছাকৃতভাবে ভুল
            জন্ম নিবন্ধন নং প্রদান করলে অথবা একাধিক ভুয়া জন্ম নিবন্ধন নং ব্যবহার
            করে আবেদন করলে তার প্রার্থিতা বাতিল করা হবে।
          </p>
          <p className="font-bold text-lg">
            <span className="text-red-500 font-bold">*</span> আবেদন কারীর অবশ্যই
            ডিজিটাল জন্ম নিবন্ধন সনদ (উভয় ভাষায়) থাকতে হবে।
          </p>
          <p className="font-bold text-lg">
            <span className="text-red-500 font-bold">*</span> আবেদন ও ফি প্রদানে
            যে কোন সমস্যায় যোগাযোগ করতে পারবেন: মোঃ সায়হান সৈকত, #০১৭৪৪৭৬৯৩৩১
          </p>

          <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
            <div className=" border-2 rounded-lg my-5 p-5">
              <h3 className="mb-5 font-bold text-lg">শিক্ষার্থীর তথ্য</h3>
              <div className="md:grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      শিক্ষার্থীর নাম
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("name", {
                      required: "নাম আবশ্যক",
                    })}
                    type="text"
                    placeholder="নাম লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.name && errors.name.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      জন্ম তারিখ{" "}
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("dateOfBirth", {
                      required: "জন্ম তারিখ আবশ্যক",
                    })}
                    type="text"
                    placeholder="দিন-মাস-বছর"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.dateOfBirth && errors.dateOfBirth.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      জন্ম নিবন্ধন নম্বর
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("birthCertificateNo", {
                      required: "জন্ম নিবন্ধন নম্বর আবশ্যক",
                    })}
                    type="text"
                    placeholder="জন্ম নিবন্ধন নম্বর লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.birthCertificateNo &&
                        errors.birthCertificateNo.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      লিঙ্গ
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("gender", {
                      required: "লিঙ্গ তথ্য আবশ্যক",
                    })}
                    className="select select-bordered"
                  >
                    <option value="BOY">BOY</option>
                    <option value="GIRL">FEMALE</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.gender && errors.gender.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      মোবাইল নম্বর
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("contactNo", {
                      required: "মোবাইল নম্বর আবশ্যক",
                    })}
                    type="text"
                    placeholder="মোবাইল নম্বর লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.contactNo && errors.contactNo.message}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-lg my-5 p-5">
              <h3 className="mb-5 font-bold text-lg">অভিভাবকের তথ্য</h3>
              <div className="md:grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      পিতার নাম
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("fatherName", {
                      required: "পিতার নাম আবশ্যক",
                    })}
                    type="text"
                    placeholder="পিতার নাম লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.fatherName && errors.fatherName.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      পিতার এনআইডি নম্বর
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("fahterNid", {
                      required: "পিতার এনআইডি নম্বর আবশ্যক",
                    })}
                    type="text"
                    placeholder="পিতার এনআইডি নম্বর লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.fahterNid && errors.fahterNid.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      মাতার নাম
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("motherName", {
                      required: "মাতার নাম আবশ্যক",
                    })}
                    type="text"
                    placeholder="মাতার নাম লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.motherName && errors.motherName.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      মাতার এনআইডি নম্বর
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("motherNid", {
                      required: "মাতার এনআইডি নম্বর আবশ্যক",
                    })}
                    type="text"
                    placeholder="মাতার এনআইডি নম্বর লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.motherNid && errors.motherNid.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      অভিভাবকের নাম
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("gaurdianName", {
                      required: "অভিভাবকের নাম আবশ্যক",
                    })}
                    type="text"
                    placeholder="অভিভাবকের নাম লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.gaurdianName && errors.gaurdianName.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      অভিভাবকের এনআইডি নম্বর
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("gaurdianNid", {
                      required: "অভিভাবকের এনআইডি নম্বর আবশ্যক",
                    })}
                    type="text"
                    placeholder="অভিভাবকের এনআইডি নম্বর লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.gaurdianNid && errors.gaurdianNid.message}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-lg my-5 p-5">
              <h3 className="mb-5 font-bold text-lg">শ্রেণির তথ্য</h3>
              <div className="md:grid grid-cols-1 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      শ্রেণী
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("className", {
                      required:
                        "যে শ্রেণিতে ভর্তি হতে চান সেটি নির্বাচন  আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="যে শ্রেণিতে ভর্তি হতে চান সেটি নির্বাচন করুন"
                  >
                    <option value="SIX">SIX</option>
                    <option value="SEVEN">SEVEN</option>
                    <option value="EIGHT">EIGHT</option>
                    <option value="NINE">NINE</option>
                    <option value="TEN">TEN</option>
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.className && errors.className.message}
                    </span>
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      পূর্ববর্তী বিদ্যালয়ের নাম
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("pastSchoolName", {
                      required: "পূর্ববর্তী বিদ্যালয়ের নাম আবশ্যক",
                    })}
                    type="text"
                    placeholder="পূর্ববর্তী বিদ্যালয়ের নাম লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.pastSchoolName && errors?.pastSchoolName.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      পূর্ববর্তী শ্রেণী
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("pastClassName", {
                      required: "পূর্ববর্তী শ্রেণী আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="পূর্ববর্তী শ্রেণী নির্বাচন করুন"
                  >
                    <option value="FIVE">FIVE</option>
                    <option value="SIX">SIX</option>
                    <option value="SEVEN">SEVEN</option>
                    <option value="EIGHT">EIGHT</option>
                    <option value="NINE">NINE</option>
                    <option value="TEN">TEN</option>
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.pastClassName && errors.pastClassName.message}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-lg my-5 p-5">
              <h3 className="mb-5 font-bold text-lg">বর্তমান ঠিকানা</h3>
              <div className="md:grid grid-cols-1 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      বর্তমান ঠিকানা
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("presentAddress.address", {
                      required: "বর্তমান ঠিকানা আবশ্যক",
                    })}
                    type="text"
                    placeholder="বর্তমান ঠিকানা লিখুন থানা, জেলা, বিভাগের নাম লেখার প্রয়োজন নাই"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.presentAddress?.address &&
                        errors?.presentAddress?.address.message}
                    </span>
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      বিভাগ
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("presentAddress.division", {
                      required: "বিভাগ আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="বিভাগ নিবার্চন করুন"
                  >
                    {divisions?.map((division) => (
                      <option key={division?.id} value={division?.id}>
                        {division?.name}
                      </option>
                    ))}
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.presentAddress?.division &&
                        errors?.presentAddress?.division.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      জেলা
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("presentAddress.district", {
                      required: "জেলা আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="জেলা নিবার্চন করুন"
                  >
                    {presentAddressDistricts?.map((district) => (
                      <option key={district?.id} value={district?.id}>
                        {district?.name}
                      </option>
                    ))}
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.presentAddress?.district &&
                        errors?.presentAddress?.district.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      উপজেলা
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("presentAddress.upazila", {
                      required: "উপজেলা আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="উপজেলা নিবার্চন করুন"
                  >
                    {presentAddressUpazilas?.map((upazila) => (
                      <option key={upazila.id} value={upazila.id}>
                        {upazila.name}
                      </option>
                    ))}
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.presentAddress?.upazila &&
                        errors?.presentAddress?.upazila.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      পোস্ট কোড
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("presentAddress.postCode", {
                      required: "পোস্ট কোড আবশ্যক",
                    })}
                    type="text"
                    placeholder="পোস্ট কোড লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.presentAddress?.postCode &&
                        errors.presentAddress.postCode.message}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-lg my-5 p-5">
              <h3 className="mb-5 font-bold text-lg">স্থায়ী ঠিকানা</h3>
              <div className="md:grid grid-cols-1 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      স্থায়ী ঠিকানা
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("permanentAddress.address", {
                      required: "বর্তমান ঠিকানা আবশ্যক",
                    })}
                    type="text"
                    placeholder="বর্তমান ঠিকানা লিখুন থানা, জেলা, বিভাগের নাম লেখার প্রয়োজন নাই"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.name && errors.name.message}
                    </span>
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      বিভাগ
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("permanentAddress.division", {
                      required: "বিভাগ আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="বিভাগ নিবার্চন করুন"
                  >
                    {divisions?.map((division) => (
                      <option key={division?.id} value={division?.id}>
                        {division?.name}
                      </option>
                    ))}
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.permanentAddress?.division &&
                        errors?.permanentAddress?.division.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      জেলা
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("permanentAddress.district", {
                      required: "জেলা আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="জেলা নিবার্চন করুন"
                  >
                    {permanentAddressDistricts?.map((district) => (
                      <option key={district?.id} value={district?.id}>
                        {district?.name}
                      </option>
                    ))}
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.permanentAddress?.district &&
                        errors.permanentAddress.district.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      উপজেলা
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <select
                    {...register("permanentAddress.upazila", {
                      required: "উপজেলা আবশ্যক",
                    })}
                    className="select select-bordered"
                    placeholder="উপজেলা নিবার্চন করুন"
                  >
                    {permanentAddressUpazilas?.map((upazila) => (
                      <option key={upazila.id} value={upazila.id}>
                        {upazila.name}
                      </option>
                    ))}
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.permanentAddress?.upazila &&
                        errors?.permanentAddress?.upazila?.message}
                    </span>
                  </label>
                </div>
                <div className="form-control w-[90%]">
                  <label className="label">
                    <span className="label-text">
                      পোস্ট কোড
                      <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    {...register("permanentAddress.postCode", {
                      required: "পোস্ট কোড আবশ্যক",
                    })}
                    type="text"
                    placeholder="পোস্ট কোড লিখুন"
                    className="input input-bordered w-[90%]"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors?.permanentAddress?.postCode &&
                        errors.permanentAddress.postCode.message}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-lg my-5 p-5">
              <h3 className="mb-5 font-bold text-lg">শিক্ষার্থীর ছবি</h3>
              <div className="md:grid grid-cols-2 place-content-center place-items-center">
                {selectedImage ? (
                  <img height={500} width={200} src={selectedImage} alt="" />
                ) : null}
                <div>
                  <label className="label">
                    <span className="label-text">
                      শিক্ষার্থীর ছবি নির্বাচন করুন *
                    </span>
                  </label>
                  <input
                    type="file"
                    {...register("imageUrl", {
                      required: "ছবি আবশ্যক",
                    })}
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.imageUrl && errors.imageUrl.message}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input
                {...register("agreeTerm")}
                type="checkbox"
                className="checkbox mr-2"
              />
              <span className="label-text">
                আমি অঙ্গীকার করছি যে উপরে প্রদানকৃত সকল তথ্য সঠিক।
              </span>
            </div>
            <div className="w-full flex justify-center mt-10">
              <input
                // disabled={!agreeTerm}
                className="btn btn-primary text-white w-44"
                value={"সাবমিট করুন"}
                type="submit"
              />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div
            id="applicationPage"
            className="flex justify-center items-center w-full h-[305mm]"
          >
            <div className=" h-[290mm]  bg-contain  w-[200mm] relative  rounded  p-10 border-2 border-green-500 m-auto">
              <div className="flex items-center mb-5">
                <img
                  width={60}
                  height={60}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/800px-Government_Seal_of_Bangladesh.svg.png"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-bold  md:text-3xl text-primary">
                    কুলাঘাট উচ্চ বিদ্যালয়
                  </h1>
                  <h1 className="font-bold  md:text-3xl text-red-500">
                    KULAGHAT HIGH SCHOOL
                  </h1>
                  <div className="w-full flex justify-between mt-2">
                    <small>EIIN: 122950</small>
                    <small>Code: 7257</small>
                  </div>
                </div>
              </div>
              <div className="border-2 p-5 ">
                <div className="bg-primary rounded-md">
                  <h3 className="text-xl text-white text-center mb-5  ">
                    ভর্তি ফরম ২০২৪
                  </h3>
                </div>
                <div className="flex w-full justify-end absolute top-[30] right-16">
                  <div className="w-[120px]">
                    <img
                      className="h-[150px] w-[120px]"
                      src={selectedImage}
                      alt="profile"
                    />
                  </div>
                </div>

                <div className="text-small">
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">আবেদন নম্বর</p>

                    <p>: {generateUniqueId()}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">নাম</p>

                    <p>: {admissionInfo?.name}</p>
                  </div>

                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">জন্ম সনদ নং</p>
                    <p>: {admissionInfo?.birthCertificateNo}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">জন্ম তারিখ</p>

                    <p>: {admissionInfo?.dateOfBirth}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">লিঙ্গ</p>

                    <p>: {admissionInfo?.gender}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">মোবাইল নং</p>

                    <p>: {admissionInfo?.contactNo}</p>
                  </div>

                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">পিতার নাম</p>

                    <p>: {admissionInfo?.fatherName}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">পিতার এনআইডি</p>

                    <p>: {admissionInfo?.fahterNid}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">মাতার নাম</p>

                    <p>: {admissionInfo?.motherName}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">মাতার এনআইডি</p>

                    <p>: {admissionInfo?.motherNid}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">অভিভাবকের নাম</p>

                    <p>: {admissionInfo?.gaurdianName}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">অভিভাবকের এনআইডি</p>

                    <p>: {admissionInfo?.gaurdianNid}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">পূর্ববর্তী বিদ্যালয়</p>

                    <p>: {admissionInfo?.pastSchoolName}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">পূর্ববর্তী শ্রেণী</p>

                    <p>: {admissionInfo?.pastClassName}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-36 font-bold">শ্রেণী</p>

                    <p>: {admissionInfo?.className}</p>
                  </div>

                  <div className="grid grid-cols-2 border-2 p-2 rounded-lg  my-5">
                    <div>
                      <p className="font-bold underline">বর্তমান ঠিকানা:</p>
                      <p>{admissionInfo?.presentAddress?.address}</p>
                      <div className="flex justify-start items-center">
                        <p className="w-20 font-bold">বিভাগ</p>

                        <p>
                          :{" "}
                          {getDivisionName(
                            admissionInfo?.presentAddress?.division
                          )}
                        </p>
                      </div>
                      <div className="flex justify-start items-center">
                        <p className="w-20 font-bold">জেলা</p>

                        <p>
                          :{" "}
                          {getDistrictName(
                            admissionInfo?.presentAddress?.district
                          )}
                        </p>
                      </div>
                      <div className="flex justify-start items-center">
                        <p className="w-20 font-bold">উপজেলা</p>

                        <p>
                          :{" "}
                          {getUpazilaName(
                            admissionInfo?.presentAddress?.upazila
                          )}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold underline">স্থায়ী ঠিকানা:</p>
                      <p>{admissionInfo?.permanentAddress?.address}</p>
                      <div className="flex justify-start items-center">
                        <p className="w-20 font-bold">বিভাগ</p>

                        <p>
                          :{" "}
                          {getDivisionName(
                            admissionInfo?.permanentAddress?.division
                          )}
                        </p>
                      </div>
                      <div className="flex justify-start items-center">
                        <p className="w-20 font-bold">জেলা</p>

                        <p>
                          :{" "}
                          {getDistrictName(
                            admissionInfo?.permanentAddress?.district
                          )}
                        </p>
                      </div>
                      <div className="flex justify-start items-center">
                        <p className="w-20 font-bold">উপজেলা</p>

                        <p>
                          :{" "}
                          {getUpazilaName(
                            admissionInfo?.permanentAddress?.upazila
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 mt-2 rounded-lg flex items-center justify-between">
                <div className="text-sm col-span-2">
                  <h3 className="font-bold text-lg">নির্দেশনা:</h3>
                  <p>১। আবেদনপত্রের প্রিন্ট কপি অবশ্যই সংগ্রহ করতে হবে।</p>
                  <p>২। আবেদনপত্র বিদ্যালয় অফিস বরাবর জমা দিতে হবে।</p>
                  <p>
                    ৩। একই শিক্ষার্থী একাধিক শ্রেণিতে ভর্তির আবেদন করতে পারবে
                    না।
                  </p>
                  <div>
                    <h1 className="text-lg font-bold text-primary">
                      পেমেন্ট নির্দেশনা:
                    </h1>
                    <ul>
                      <li>1. আবেদন ফি Tk. 120.00</li>
                      <li>
                        2. আবেদন ফি প্রদানের শেষ তারিখ 14-11-2023 11:59 PM.
                      </li>
                      <li>
                        3. আবেদন ফি ডাচ বাংলা এজেন্ট ব্যাংক, কুলাঘাট বাজার
                        শাখায়, হিসাব নম্বরঃ 7017513889334- এ ১২০ টাকা জমা দিতে
                        হবে।
                      </li>
                      <li>
                        4. আবেদন কপি ও আবেদন ফি জমাদানের রসিদ সহ বিদ্যালয়ের অফিস
                        চলাকালীন সময়ে জমা দিতে হবে।
                      </li>
                    </ul>
                  </div>
                </div>
                <QRCode
                  size={256}
                  className="w-16"
                  value={`Admission-2024 in Kulaghat High School.\nYour birth certificate number is: ${admissionInfo?.contactNo}`}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <p className="text-center mb-2 font-bold">
                <small>
                  &copy;2023 কুলাঘাট উচ্চ বিদ্যালয় সমস্ত অধিকার সংরক্ষিত
                </small>
              </p>
            </div>
          </div>
          <div className="flex justify-center my-5 control-group">
            <button
              className="btn bg-red-500 text-white border-0 mx-2"
              onClick={handlePrintDocument}
            >
              ডাউনলোড
            </button>
          </div>
        </div>
      )}
    </>
  );
}
