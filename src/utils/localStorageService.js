class LocalStorageService {
  WORKOUTS = "workouts";
  WORKOUT_BREAK = "workoutbrk";

  constructor() {
    if (LocalStorageService.instance) {
      return LocalStorageService.instance;
    }
    LocalStorageService.instance = this;
  }

  setWorkoutBreak(value) {
    try {
      localStorage.setItem(this.WORKOUT_BREAK, Number.parseInt(value));
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  }

  setWorkouts(value) {
    try {
      localStorage.setItem(this.WORKOUTS, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  }

  getWorkoutBreak() {
    let workoutBreak = 0;
    try {
      workoutBreak =
        Number.parseInt(localStorage.getItem(this.WORKOUT_BREAK)) || 0;
    } catch (error) {
      console.error("Error getting localStorage item:", error);
    }
    return workoutBreak;
  }

  getWorkouts() {
    try {
      const item = localStorage.getItem(this.WORKOUTS);
      return item ? JSON.parse(item) : JSON.parse("[]");
    } catch (error) {
      console.error("Error getting localStorage item:", error);
      return null;
    }
  }

  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  }
}

// Create a single, shared instance and optionally freeze it to prevent modifications.
const localStorageService = new LocalStorageService();
Object.freeze(localStorageService);

export default localStorageService;
