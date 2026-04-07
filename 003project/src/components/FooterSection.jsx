function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      
      <div className="text-center">
        <h2 className="text-xl font-semibold">My Website</h2>
        
        <p className="text-gray-400 text-sm mt-2">
          © 2026 All rights reserved
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;