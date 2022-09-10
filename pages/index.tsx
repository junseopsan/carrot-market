import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col p-5 space-y-2 ">
      <input
        type="text"
        required
        placeholder="Username"
        className="p-1 border border-gray-400 rounded-md peer "
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input is invalid
      </span>
      <span className="hidden peer-valid:block peer-valid:text-teal-500">
        Awesome username
      </span>
      <span className="hidden peer-hover:block peer-hover:text-amber-500">
        Hello
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
