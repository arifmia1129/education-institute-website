/* eslint-disable react/prop-types */
export default function PageHeader({ title }) {
  return (
    <div className="relative">
      <div className="relative h-[20vh] mx-auto  w-[95vw] bg-[url('/src/assets/institute.jpg')] bg-cover bg-no-repeat">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="h-full w-full flex justify-center  md:p-20 items-center">
            <div>
              <h1 className="text-5xl text-white font-bold pl-5 text-center">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
