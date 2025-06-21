const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">NEON</h3>
            <p className="text-sm text-muted-foreground">© 2025 NEON Rated, LLC. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/neonrated/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Instagram</a>
            <a href="https://www.tiktok.com/@neonrated" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">TikTok</a>
            <a href="https://twitter.com/neonrated" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Twitter</a>
            <a href="https://www.facebook.com/neonrated" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Facebook</a>
            <a href="https://www.youtube.com/neonrated" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
