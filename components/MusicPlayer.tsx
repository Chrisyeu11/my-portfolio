const MusicPlayer = () => {
    return (
      <div className="flex justify-center items-center p-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4_yWMOPfSNo?si=qIhF5Gh4u028OjOA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default MusicPlayer;
  