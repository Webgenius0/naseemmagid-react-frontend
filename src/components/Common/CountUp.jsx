import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function countDecimals(value) {
  if (!value || Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
  prefix = "", // NEW
  suffix = "", // NEW
}) {
  const ref = useRef(null);
  const decimalPlaces = Math.max(countDecimals(from), countDecimals(to));
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (ref.current) {
      const initialValue = direction === "down" ? to : from;
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      };
      const formattedNumber = Intl.NumberFormat("en-US", options).format(
        initialValue.toFixed(decimalPlaces)
      );
      ref.current.textContent =
        (prefix || "") +
        (separator ? formattedNumber.replace(/,/g, separator) : formattedNumber) +
        (suffix || "");
    }
  }, [from, to, direction, separator, decimalPlaces, prefix, suffix]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === "function") {
          onEnd();
        }
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const options = {
          useGrouping: !!separator,
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          parseFloat(latest.toFixed(decimalPlaces))
        );

        ref.current.textContent =
          (prefix || "") +
          (separator ? formattedNumber.replace(/,/g, separator) : formattedNumber) +
          (suffix || "");
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, decimalPlaces, prefix, suffix]);

  return <span className={className} ref={ref} />;
}
