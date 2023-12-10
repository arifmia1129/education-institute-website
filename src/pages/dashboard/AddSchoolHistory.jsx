import { useCallback, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import api from "../../utils/axios.config";
import axios from "axios";

export default function AddSchoolHistory() {
  // Editor state
  const [value, setValue] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  console.log(value);

  // Editor ref
  const quill = useRef();

  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");

      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/dg2ibc23a/image/upload`,
        formData
      );

      console.log(data);

      // Read the selected file as a data URL
      reader.onload = () => {
        const quillEditor = quill.current.getEditor();
        // Get the current selection range and insert the image at that index
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", data?.url, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  const handleAddHistory = async () => {
    // setIsLoading(true);
    try {
      const { data } = await api.patch("about", { history: value });

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      // setIsLoading(false);
    }
  };
  return (
    <div className="w-full min-h-32">
      <ReactQuill
        ref={(el) => (quill.current = el)}
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => setValue(value)}
      />
      <button
        className="btn btn-primary text-white mt-5"
        onClick={handleAddHistory}
      >
        Submit
      </button>
    </div>
  );
}
