import { useState, useEffect, useRef } from "react";
import "./comps.css";
import song from "../music/Mariah Carey - Obsessed (Lyrics) [IIS3HTulPyM].mp3";

const DOTS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + Math.random() * 80}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${5 + Math.random() * 5}s`,
  size: Math.random() > 0.5 ? "3px" : "2px",
}));


export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalSec, setTotalSec] = useState(0);
  const audioRef = useRef(null);
  const seekTo = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = ratio * audioRef.current.duration;
  };
  const secToTime = (s) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  const currentSec = Math.round((progress / 100) * totalSec);

  const skip = (sec) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      Math.max(audioRef.current.currentTime + sec, 0),
      audioRef.current.duration || 0
    );
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying((p) => !p);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const onLoadedMetadata = () => {
      setTotalSec(Math.floor(audio.duration));
    };

    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);
  
  return (
    <>
      <div className="mp-card" data-aos="zoom-in-up" data-aos-duration="2000">
        {/* particles */}
        <div className="mp-particles">
          {DOTS.map((d) => (
            <div
              key={d.id}
              className="mp-dot"
              style={{
                left: d.left,
                bottom: "-4px",
                width: d.size,
                height: d.size,
                animationDelay: d.delay,
                animationDuration: d.duration,
              }}
            />
          ))}
        </div>

        {/* info */}
        <div className="mp-info">
          <p className="mp-label">Fav Song</p>
          <p className="mp-title">OBSESSED</p>
          <p className="mp-artist">Mariah Carey</p>
        </div>

        <div className="mp-divider" />

        {/* progress */}
        <div className="mp-progress">
          <div className="mp-track" onClick={seekTo}>
            <div className="mp-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="mp-times">
            <span>{secToTime(currentSec)}</span>
            <span>{secToTime(totalSec)}</span>
          </div>
        </div>

        {/* controls */}
        <div className="mp-controls">
          <button
            className="mp-ctrl"
            onClick={() => skip(-10)}
            aria-label="rewind 10 seconds"
          >
            <i className="fi fi-rr-rewind"></i>
          </button>

          <button
            className="mp-play"
            onClick={togglePlay}
            aria-label={playing ? "pause" : "play"}
          >
            {playing ? (
              <i className="fi fi-rr-pause"></i>
            ) : (
              <i className="fi fi-rr-play"></i>
            )}
          </button>

          <button
            className="mp-ctrl"
            onClick={() => skip(10)}
            aria-label="forward 10 seconds"
          >
            <i className="fi fi-rr-rewind" style={{ transform: "scaleX(-1)" }}></i>
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={song} />
    </>
  );
}