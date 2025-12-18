type SoundWaveProps = {
  bars?: number[];
  barWidth?: number;
  gap?: number;
  color?: string;
  containerHeight?: number;
  duration?: number;
};

export const SoundWave = ({
  bars = [8, 14, 10, 18, 12, 9, 16, 11],
  barWidth = 3,
  gap = 2,
  color = "#FF7A00",
  containerHeight = 24,
  duration = 0.9,
}: SoundWaveProps) => {
  return (
    <>
      <div
        className="soundwave flex items-center"
        style={{ height: containerHeight }}
      >
        {bars.map((height, i) => (
          <span
            key={i}
            className="soundwave-bar"
            style={{
              width: barWidth,
              height,
              backgroundColor: color,
              marginRight: i !== bars.length - 1 ? gap : 0,
              animation: `audioWave ${duration + i * 0.15}s ease-in-out ${
                i * 0.1
              }s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
};
