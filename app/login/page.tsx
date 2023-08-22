import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen bg-[url('/cinematic_render_awaken_full.webp')] bg-no-repeat bg-cover	flex items-center justify-center p-4">
      <div className="max-w-lg">
        <div className="bg-black w-full rounded-lg p-8 mb-8">
          <Link href="/" className="flex justify-center mb-8">
            <img src="/logo.png" alt="" className="w-24" />
          </Link>
          <div className="flex flex-col items-center gap-1 mb-8">
            <h1 className="text-xl text-white">Iniciar sesión</h1>
          </div>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                className="w-full border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu usuario"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu contraseña"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div>
              <button className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors">
                Iniciar sesión
              </button>
            </div>
            <span className="flex items-center justify-center gap-2 text-white">
              ¿No tienes cuenta?
              <Link href="/register">
                <p className="text-blue-500">Registrarse</p>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
