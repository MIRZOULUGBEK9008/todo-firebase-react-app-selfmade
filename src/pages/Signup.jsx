function Signup() {
  return (
    <div className="bg-base-200 flex h-full items-center justify-center">
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
          <button className="btn btn-active btn-neutral">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
