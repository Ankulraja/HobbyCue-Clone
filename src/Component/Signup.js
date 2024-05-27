const Signup = () => {
  return (
    <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign In</h2>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4 flex items-center justify-center">
            <span>Continue with Google</span>
          </button>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 flex items-center justify-center">
            <span>Continue with Facebook</span>
          </button>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">Or connect with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <form className="text-left">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                Forgot password?
              </a>
            </div>
            <div className="mt-6">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Continue
              </button>
            </div>
          </form>
        </div>
  )
}
export default Signup