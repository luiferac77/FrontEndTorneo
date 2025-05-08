import { House, SoccerBall, ChartBar } from "@phosphor-icons/react";

const Breadcrumb = ({ current }) => {
  return (
    <nav className="text-gray-700 text-sm mb-4 mt-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600">
            <House size={18} className="mr-2" />
            Inicio
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500 flex items-center">
              {current === "Ligas" && <SoccerBall size={18} className="mr-2" />}
              {current === "Estadísticas" && <ChartBar size={18} className="mr-2" />}
              {current}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
