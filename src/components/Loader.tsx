const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        <div className="loader-spinner"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loader-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
