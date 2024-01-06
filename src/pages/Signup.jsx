import { toast } from "react-toastify";
import { auth, googleProvider } from "../firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useGlobalContext } from "../hooks/useGlobalContext";
function Signup() {
  const { dispatch } = useGlobalContext();
  // HANDLESUBMIT
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome back :)");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex h-full items-center justify-center bg-base-200">
      <div className="w-full max-w-[400px]">
        <h2 className="mb-4 text-center text-2xl font-bold">Signup</h2>
        <form className="flex flex-col gap-5">
          <label>
            <span class="label-text font-semibold">Email</span>
            <input
              type="email"
              placeholder="example@email.com"
              name="email"
              className="input input-bordered input-info w-full"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </label>
          <label>
            <span class="label-text font-semibold">Username</span>
            <input
              type="text"
              placeholder="John"
              name="username"
              className="input input-bordered input-info w-full"
              required
            />
          </label>
          <label>
            <span class="label-text font-semibold">Password</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered input-info w-full"
              required
            />
          </label>
          <button className="btn btn-neutral btn-active">Submit</button>
          <button
            onClick={(e) => handleGoogleLogin(e)}
            className="btn btn-ghost btn-active"
          >
            Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
