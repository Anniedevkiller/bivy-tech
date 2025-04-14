export default function Services() {
  return (
    <div className="pt-24 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Web Development</h3>
          <p>Custom websites and web applications built with the latest technologies to meet your specific needs.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
          <p>
            Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
          <p>Scalable and secure cloud infrastructure and services to power your business applications.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
          <p>User-centered design services that create intuitive, engaging, and accessible digital experiences.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
          <p>
            Advanced AI solutions that help businesses automate processes, gain insights, and make better decisions.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Consulting</h3>
          <p>Expert technology consulting to help you navigate the complex digital landscape and achieve your goals.</p>
        </div>
      </div>
    </div>
  )
}
