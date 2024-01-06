import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-full items-center justify-center bg-base-200">
      <div className="w-full max-w-[400px]">
        <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>
        <form className="flex flex-col gap-5">
          <label>
            <span className="label-text font-semibold">Email</span>
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
            <span className="label-text font-semibold">Password</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered input-info w-full"
              required
            />
          </label>
          <button className="btn btn-neutral btn-active">Submit</button>
          <Link className="btn btn-accent btn-active" to={"/signup"}>
            Create an account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
