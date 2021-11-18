export function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

export const MAPBOX_TOKEN = {
  accessToken:
    "pk.eyJ1IjoiaWJheW91c3NlZiIsImEiOiJja2w5aWU2NjQwbnc2MnJuMGxvaHAyYmUwIn0._2BWm8cwRivc5Vpf899Lhg",
};
