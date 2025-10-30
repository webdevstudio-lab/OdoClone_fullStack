import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div class="text-center">
        <p class="text-4xl font-semibold text-indigo-600">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Page introuvable
        </h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Désolé, nous n'avons pas trouvé la page que vous recherchez.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Retour
          </a>
          <a href="#" class="text-sm font-semibold text-gray-900">
            Contacter le support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
