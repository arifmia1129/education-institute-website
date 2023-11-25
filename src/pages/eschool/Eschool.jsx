import PageHeader from "../../components/PageHeader";

export default function Eschool() {
  return (
    <div className="my-10">
      <PageHeader title={"E-School"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <div className="m-2 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VH_zYosavDU?si=QPT4oufvM_8gdfF8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-2 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/a2dDGWwztM0?si=tbfzKU5iSUGwHpYh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-2 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yKhPciXBkeE?si=yb8hDFtGSb1cuhCN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-2 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sZhyl5MR3eA?si=jKOmyz4qzflFnEJx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
