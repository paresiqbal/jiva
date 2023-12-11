import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-4">
      <div className="container mx-auto">
        <h2 className="font-custom text-3xl font-bold">&copy; JIVA</h2>
        <div className="my-4">
          <h3 className="font-semibold text-xl pb-2">Contact</h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex items-center gap-2 font-semibold mb-2 md:mb-0">
              <FaInstagram className="w-6 h-6" />
              <a
                href="https://instagram.com/jiva.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                jiva.id
              </a>
            </div>
            <div className="flex items-center gap-2 font-semibold mb-2 md:mb-0">
              <FaFacebook className="w-6 h-6" />
              <a
                href="https://facebook.com/jiva.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                jiva.id
              </a>
            </div>
            <div className="flex items-center gap-2 font-semibold mb-2 md:mb-0">
              <FaTwitter className="w-6 h-6" />
              <a
                href="https://twitter.com/jiva.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                jiva.id
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="mb-2 md:mb-0">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:contact@jiva.id">contact@jiva.id</a>
          </p>
          <p className="mb-2 md:mb-0">
            <span className="font-semibold">Phone:</span> +1 (123) 456-7890
          </p>
          <p className="mb-2 md:mb-0">
            <span className="font-semibold">Address:</span> 1234 Street Name,
            City, Country
          </p>
        </div>
        <p className="text-center mt-4">
          Made with <span className="text-red-500">&hearts;</span>
        </p>
      </div>
    </footer>
  );
}
