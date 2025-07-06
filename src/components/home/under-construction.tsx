import { CircleAlert } from 'lucide-react';

export default function UnderConstructionPage() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            🚧 Under Construction 🚧
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            We're working hard to bring you something amazing. <br />
            Please check back soon!
          </p>

          <div className="flex justify-center">
            <CircleAlert
              strokeWidth={1}
              className="w-80 h-80 text-yellow-500 hover:animate-ping"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
