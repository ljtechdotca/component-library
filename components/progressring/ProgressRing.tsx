import styles from "./ProgressRing.module.scss";

export interface ProgressRingProps {
  color: string;
  progress: number;
  radius: number;
  stroke: number;
}

export const ProgressRing = ({
  color,
  progress,
  radius,
  stroke,
}: ProgressRingProps) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const strokeDasharray = `${circumference} ${circumference}`;
  return (
    <svg className={styles.root} height={radius * 2} width={radius * 2}>
      <circle
        style={{
          strokeDashoffset,
        }}
        className={styles.container}
        strokeDasharray={strokeDasharray}
        strokeWidth={stroke}
        stroke={color}
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};
