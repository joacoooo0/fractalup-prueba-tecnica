import homeIcon from "../assets/home_icon.png";
import siteIcon from "../assets/site_icon.png";

const Vista1 = () => {
  return (
    <div>
      <main className="flex">
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0">
          <div className="h-full px-3 py-4 overflow-y-auto bg-[#1b1b1b]">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img src={homeIcon} alt="homeicon" className="w-6" />
                  <span className="ms-3">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/vista1"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img src={siteIcon} alt="homeicon" className="w-6" />
                  <span className="ms-3">Vista 1</span>
                </a>
              </li>
              <li>
                <a
                  href="/vista2"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img src={siteIcon} alt="homeicon" className="w-6" />
                  <span className="ms-3">Vista 2</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="ml-64 w-full h-full p-5">
          <h1>Esta es la vista 1</h1>
        </div>
      </main>
    </div>
  );
};

export default Vista1;
