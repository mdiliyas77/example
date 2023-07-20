import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const context = createContext();

export const CustomContext = () => useContext(context);

export default function DataContext({ children }) {
  const [data, setData] = useState([
    {
      name: "Altaf",
      email: "altaf.mugli@gmail.com",
      user_type: "Admin",
      mobile: "8880880547",
    },
  ]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    user_type: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function submitData() {
    if (
      input.name === "" ||
      input.email === "" ||
      input.mobile === "" ||
      input.user_type === ""
    ) {
      toast.warning("All fields are mandatory!!");
      return;
    }
    axios
      .post("http://localhost:8080/postData")
      .then((res) => {
        toast.success("Data added successfully", {
          progress: true,
          position: "top-center",
        });
        getData();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  function getData() {
    axios
      .get("http://localhost:8080/getData")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  return (
    <context.Provider
      value={{ getData, submitData, data, input, setInput, handleChange }}
    >
      {children}
    </context.Provider>
  );
}
