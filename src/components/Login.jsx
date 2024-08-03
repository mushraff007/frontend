import React from "react";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:4001/user/login", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Loggedin Successfully");
//           document.getElementById("my_modal_3").close();
//           setTimeout(() => {
//             window.location.reload();
//             localStorage.setItem("Users", JSON.stringify(res.data.user));
//           }, 1000);
//         }
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//           toast.error("Error: " + err.response.data.message);
//           setTimeout(() => {}, 2000);
//         }
//       });
//   };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
                <Link to="/"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
                </Link>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            <div>
            <span>Email</span>
            <br/>
            <input
                 type="email"
                 placeholder="Enter your email"
                 className="w-80 px-3 py-1 border rounded-md outline-none"
                 />

            </div>
            <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                 type="text"
                 placeholder="Enter your password"
                 className="w-80 px-3 py-1 border rounded-md outline-none"
                 />
            </div>
            <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:pg=pink-700 duaration-200">
                    Login
                </button>
                <p>Not registered?{""}
                    <Link to="/signup" className="underline text-blue-500 curser-pointer">
                        Signup
                        </Link>{" "} </p>
            </div>
            </div>
            </dialog>
            </div>
          
  );
}

export default Login;